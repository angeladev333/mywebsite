import React from 'react';

function HeroPage() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-2">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
      <div className="col-span-4">
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
}

export default HeroPage;
