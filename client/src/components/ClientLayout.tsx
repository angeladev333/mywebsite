'use client';

import NewNavbar from '@/molecules/NewNavbar';
import ClickSpark from '@/components/ClickSpark';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NewNavbar />
      <ClickSpark sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        {children}
      </ClickSpark>
    </>
  );
}
