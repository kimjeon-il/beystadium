# Libra style-match generation prompts

These prompts create candidates only. The builder discards every generated silhouette, alpha value, text pixel, background pixel, and part boundary. Line candidates are used only as support tests. Material candidates contribute only blurred luminance inside the final source-registered masks.

## Shared fixed block

```text
Image 1 is the authoritative front-orthographic geometry, scale, placement, silhouette, openings, ridges, and part boundaries. Keep every target contour and opening exactly where it is. Do not add, remove, enlarge, rotate, or reinterpret geometry. Do not alter text, stickers, symbols, alpha, holes, or non-target pixels. Render only the named target part and replace every non-target pixel with perfectly uniform chroma-key magenta RGB 255,0,255. No transparent background, cast shadow, glow, asymmetric lighting, or isolated white light blob. Candidate guide only.
```

## Metal linework

```text
Use Image 2 for clean illustration style only and Image 3 only for ridges and short level changes already visible on the exposed outer blades, the 12 and 6 o'clock tip face divisions, and short gray frame steps. Draw dark-gray linework equivalent to 4 px major boundaries, 3 px structural lines, and 2 px fine lines at Image 1 scale. Simplify noisy lines. Do not add parallel contours, duplicate outlines, broad black shadow shapes, scratches, inscriptions, a central bore, hidden internal plates, spokes, or unexposed reference geometry.
```

## Clear-wheel linework

```text
Use Image 2 for clean illustration style only and Image 3 only for the existing outer annular grooves and vertical slots, edge teeth, and face divisions and circular recesses of the four mounts. Keep the existing 12 and 6 o'clock flame ornaments. Draw dark olive-gray linework equivalent to 4 px major boundaries, 3 px structural lines, and 2 px fine lines. Do not import the reference wheel's center ring, internal panels, bridges, inner openings, or alternate flame geometry. Do not add parallel contours, duplicate outlines, broad black shadows, text, or symbols.
```

## Metal material

```text
Apply uniform camera-centered frontal lighting symmetric left-right and top-bottom. Render bright gray zinc alloy with broad soft highlights, #EDEDEE narrow bright reflections, #C0BFC0 light midtones, #AAA8A7 darker midtones, and #807B72 dark reflected planes. Follow only existing facets and ridges and keep internal boundaries crisp at thumbnail size. Do not make it flat plastic or add geometry, duplicate lines, scratches, inscriptions, hidden parts, or local light blobs.
```

## Clear-plastic material

```text
Apply uniform camera-centered frontal lighting symmetric left-right and top-bottom. Render colored translucent yellow-green plastic, never opaque flat paint. Use deep surfaces #45491E, transmission shadow #596922, midtones #A1BA2D to #ADC633, bright surfaces #B5CD3A, and pale transmitted reflection #C6C87D. Concentrate color at edges and protrusions, keep broad internal areas translucent, and allow only already-present gray metal and yellow lower parts to appear through it. Do not cover the face bolt or sticker or import alternate reference geometry.
```

## Face-bolt material

```text
Render only the central yellow hexagonal face-bolt body and bevel. Preserve the sticker area without editing it. Apply symmetric frontal lighting and opaque molded-plastic shading with base #FFB900, a restrained darker bevel, a soft light midtone, and narrow plastic highlights. Do not add metal or glass reflections, text, symbols, grooves, holes, or geometry.
```

## Yellow lower-part material

```text
Render only the four yellow lower components visible through the four oval openings. Keep the four shapes separate from the face bolt and preserve their short dark division lines. Apply symmetric frontal lighting and opaque molded-plastic shading with base #FFB900, restrained darker bevels, soft light midtones, and narrow plastic highlights. Do not enlarge the shapes, fill transparent opening pixels, add parts, or use metal reflections.
```
