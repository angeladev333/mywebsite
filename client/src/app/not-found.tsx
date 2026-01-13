import React from 'react';
import Link from 'next/link';
import { LinkPreview } from '@/components/ui/link-preview';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 ">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#f28482]">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Page not found</p>
        <div className="text-gray-500 mt-2">
          Were you looking for{' '}
          <LinkPreview url="https://v1.angelaxu.design/">
            {`this? (˵ ¬ᴗ¬˵)`}
          </LinkPreview>
        </div>
      </div>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-[#f8edeb] text-gray-800 rounded-full font-medium hover:bg-[#fcd5ce] transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
