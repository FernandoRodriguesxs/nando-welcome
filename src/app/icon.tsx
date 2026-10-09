import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const ivory = "#fbf8f2";

// Favicon: the "F" monogram in the site's sage and ivory. The letter is built from
// solid bars so it stays bold and crisp at 16px, without loading a font file.
export default function Icon() {
  const bar = (left: number, top: number, width: number, height: number) => (
    <div style={{ position: "absolute", left, top, width, height, borderRadius: 2, background: ivory }} />
  );

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", borderRadius: 16, background: "#425641" }}>
        {bar(19, 13, 10, 38)}
        {bar(19, 13, 28, 10)}
        {bar(19, 29, 22, 9)}
      </div>
    ),
    size,
  );
}
