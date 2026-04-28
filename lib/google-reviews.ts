export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
};

export type GoogleStats = {
  rating: number;
  total: number;
};

type PlaceReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description?: string;
  profile_photo_url?: string;
};

type PlaceDetailsResponse = {
  result?: {
    name?: string;
    rating?: number;
    reviews?: PlaceReview[];
    user_ratings_total?: number;
  };
  status?: string;
};

export async function fetchGoogleReviews(): Promise<{
  reviews: Testimonial[];
  stats: GoogleStats | null;
} | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=name,rating,reviews,user_ratings_total` +
    `&language=fr` +
    `&key=${encodeURIComponent(apiKey)}`;

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data = (await res.json()) as PlaceDetailsResponse;
    if (data.status && data.status !== 'OK') return null;
    const result = data.result;
    if (!result) return null;

    const reviews: Testimonial[] = (result.reviews ?? [])
      .filter((r) => r.rating === 5 && r.text && r.text.trim().length > 0)
      .map((r) => ({
        name: r.author_name,
        city: 'Avis Google',
        rating: r.rating,
        text: r.text,
        date: new Date(r.time * 1000).toISOString().slice(0, 7),
      }));

    const stats: GoogleStats | null =
      typeof result.rating === 'number' && typeof result.user_ratings_total === 'number'
        ? { rating: result.rating, total: result.user_ratings_total }
        : null;

    return { reviews, stats };
  } catch {
    return null;
  }
}
