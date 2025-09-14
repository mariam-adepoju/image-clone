"use client";

import { useEffect, useState } from "react";
import Carousel from "./ImageCarousel";
import { Loader2 } from "lucide-react";

export default function ImageCarouselWrapper() {
  const [items, setItems] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/unsplash?query=artificial+intelligence&count=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg px-5 flex justify-center items-center">
        <Loader2 className="h-15 w-15 animate-spin text-blue-500" />
      </div>
    );
  if (error)
    return (
      <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg px-5 flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );

  return <Carousel items={items} />;
}
