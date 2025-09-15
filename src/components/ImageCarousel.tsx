"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  items: UnsplashImage[];
}

export default function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const slideWidth = 100 / 1.5; // ~66.66%
  const maxIndex = items.length - 1; // stop before last full snap

  const next = () =>
    setIndex((prev) => Math.min(prev + 1, Math.floor(maxIndex)));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${Math.min(
            index * slideWidth,
            maxIndex * slideWidth
          )}%)`,
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.id}
            className="min-w-[66.66%] md:min-w-[66.66%] flex justify-center px-6 pt-15 pb-0.5 "
          >
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.urls.regular}
                alt={item.alt_description || "Unsplash Image"}
                fill
                className="object-cover"
                priority={i === 0}
              />

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  {item.alt_description || "Beautiful Image"}
                </h3>
                <p className="text-sm md:text-base text-gray-200">
                  Photo by {item.user?.name || "Unknown"} on Unsplash
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controls + Dots */}
      <div className="flex items-center justify-between px-6 pb-6">
        {/* Dots in center */}
        <div className="flex-1 flex justify-center">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`mx-1 h-2 w-2 rounded-full transition ${
                i === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        {/* Controls at bottom-right */}
        <div className="space-x-2">
          <Button
            onClick={prev}
            size="icon"
            variant="secondary"
            className="rounded-full shadow"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={next}
            size="icon"
            variant="secondary"
            className="rounded-full shadow"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
