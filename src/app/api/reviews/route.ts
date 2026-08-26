import { NextResponse } from 'next/server';

import { consultations } from '@/data/consultations';
import { getAllCourses } from '@/lib/courses';
import { getWebinars } from '@/lib/webinars';

type ReviewRequest = {
  name?: unknown;
  email?: unknown;
  target?: unknown;
  targetName?: unknown;
  review?: unknown;
  consent?: unknown;
  website?: unknown;
};

type ReviewTargetType =
  | 'course'
  | 'webinar'
  | 'consultation'
  | 'rectification'
  | 'other';

type ResolvedReviewTarget = {
  type: ReviewTargetType;
  id: string | null;
  title: string;
};

function resolveReviewTarget(
  target: string,
  targetName: string,
): ResolvedReviewTarget | null {
  if (target === 'other') {
    if (targetName.length < 2 || targetName.length > 120) {
      return null;
    }

    return {
      type: 'other',
      id: null,
      title: targetName,
    };
  }

  const [type, slug] = target.split(':');

  if (!type || !slug) {
    return null;
  }

  if (type === 'course') {
    const course = getAllCourses().find((item) => item.slug === slug);

    if (!course) {
      return null;
    }

    return {
      type: 'course',
      id: course.slug,
      title: course.title,
    };
  }

  if (type === 'webinar') {
    const webinar = getWebinars().find((item) => item.slug === slug);

    if (!webinar) {
      return null;
    }

    return {
      type: 'webinar',
      id: webinar.slug,
      title: webinar.title,
    };
  }

  if (type === 'consultation' || type === 'rectification') {
    const consultation = consultations.find(
      (item) => item.slug === slug && item.reviewType === type,
    );

    if (!consultation) {
      return null;
    }

    return {
      type: consultation.reviewType,
      id: consultation.slug,
      title: consultation.title,
    };
  }

  return null;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReviewRequest;

    const name = typeof body.name === 'string' ? body.name.trim() : '';

    const email =
      typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

    const target = typeof body.target === 'string' ? body.target.trim() : '';

    const targetName =
      typeof body.targetName === 'string' ? body.targetName.trim() : '';

    const review = typeof body.review === 'string' ? body.review.trim() : '';

    const website = typeof body.website === 'string' ? body.website.trim() : '';

    const consent = body.consent === true;

    // Honeypot: если бот заполнил скрытое поле,
    // возвращаем успешный ответ и ничего не отправляем.
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    if (
      name.length < 2 ||
      name.length > 80 ||
      !email ||
      email.length > 254 ||
      !isValidEmail(email) ||
      !target ||
      review.length < 20 ||
      review.length > 3000 ||
      !consent
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Некорректные данные формы.',
        },
        {
          status: 400,
        },
      );
    }

    const resolvedTarget = resolveReviewTarget(target, targetName);

    if (!resolvedTarget) {
      return NextResponse.json(
        {
          success: false,
          message: 'Не удалось определить курс, вебинар или услугу.',
        },
        {
          status: 400,
        },
      );
    }

    const webhookUrl = process.env.REVIEWS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('REVIEWS_WEBHOOK_URL is not configured');

      return NextResponse.json(
        {
          success: false,
          message: 'Reviews webhook is not configured.',
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
        type: 'review',

        name,
        email,

        targetType: resolvedTarget.type,
        targetId: resolvedTarget.id,
        targetTitle: resolvedTarget.title,

        review,
        consent,

        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Review webhook returned ${response.status}`);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error('Review submit error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Не удалось отправить отзыв.',
      },
      {
        status: 500,
      },
    );
  }
}
