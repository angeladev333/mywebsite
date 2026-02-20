'use client';

import { useState, useCallback } from 'react';

type CarouselCustomNavigationProps = {
    images: string[];
    altPrefix?: string;
};

export function CarouselCustomNavigation({
    images,
    altPrefix = 'image',
}: CarouselCustomNavigationProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const length = images.length;

    const goPrev = useCallback(() => {
        setActiveIndex((i) => (i - 1 + length) % length);
    }, [length]);

    const goNext = useCallback(() => {
        setActiveIndex((i) => (i + 1) % length);
    }, [length]);

    if (length === 0) return null;

    return (
        <div className="relative w-full h-full overflow-hidden rounded-xl min-w-0">
            {/* Slide track */}
            <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div
                        key={`${src}-${index}`}
                        className="h-full w-full flex-none"
                        style={{ minWidth: '100%' }}
                    >
                        <img
                            src={src}
                            alt={`${altPrefix} ${index + 1}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {/* Prev arrow - visible circle on hover */}
            <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 max-w-[48px] max-h-[48px] rounded-full text-white transition-colors bg-black/20 hover:bg-black/45 active:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6 -ml-0.5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>

            {/* Next arrow - visible circle on hover */}
            <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 max-w-[48px] max-h-[48px] rounded-full text-white transition-colors bg-black/20 hover:bg-black/45 active:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-0.5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>

            {/* Pill dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`block h-1 cursor-pointer rounded-full transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
