import { location } from "@/lib/site";

const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&z=11&hl=pt-BR&output=embed`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`;

// Google Maps embed (no API key). Warm-tinted in light mode, inverted in dark mode.
export function LocationMap({ className = "" }: { className?: string }) {
  return (
    <iframe
      className={`w-full h-full border-0 [filter:grayscale(0.25)_sepia(0.12)] dark:[filter:invert(90%)_hue-rotate(180deg)_grayscale(0.3)] ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={embedUrl}
      title={`Mapa: ${location.label}`}
    />
  );
}
