'use client';

import type { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type LayoutShellProps = {
  children: ReactNode;
};

export default function LayoutShell({ children }: LayoutShellProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
