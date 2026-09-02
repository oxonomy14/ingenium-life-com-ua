// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  contactMethod?: 'telegram' | 'messenger';
  contact?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const { name, email, subject, contactMethod, contact, message, website } =
      body;

    // Honeypot.
    // Обычный пользователь это поле никогда не заполняет.
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    if (!name || !email || !contactMethod || !contact || !message) {
      return NextResponse.json(
        {
          error: 'Required fields are missing',
        },
        {
          status: 400,
        },
      );
    }

    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('N8N_CONTACT_WEBHOOK_URL is not configured');

      return NextResponse.json(
        {
          error: 'Contact service is not configured',
        },
        {
          status: 500,
        },
      );
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name,
        email,
        subject: subject || 'other',
        contactMethod,
        contact,
        message,

        source: 'http://ingenium-life.com.ua/contacts',
        createdAt: new Date().toISOString(),
      }),

      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(
        'n8n webhook error:',
        response.status,
        await response.text(),
      );

      return NextResponse.json(
        {
          error: 'Failed to send message',
        },
        {
          status: 502,
        },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        error: 'Internal server error',
      },
      {
        status: 500,
      },
    );
  }
}
