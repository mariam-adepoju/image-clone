import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "artificial intelligence";
  const count = searchParams.get("count") || "10";

  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${query}&count=${count}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    {
      next: { revalidate: 3600 }, // cache for 1h on server
    }
  );
  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
  const data = await res.json();
  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400", // CDN/browser caching
    },
  });
}
