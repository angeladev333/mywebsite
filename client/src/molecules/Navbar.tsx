import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex justify-between items-center rounded-full m-12 px-6 bg-sky-50 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Image src="/assets/logo.png" alt="logo" width={60} height={60} />
      </div>
      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
