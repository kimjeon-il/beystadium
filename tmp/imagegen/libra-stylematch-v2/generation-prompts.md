# Libra style-match V2 geometry candidate prompts

The built-in image editor produced comparison candidates only. The V2 builder does not use candidate alpha, silhouettes, text, protected artwork, backgrounds, colors, or material pixels.

## Clear-wheel external geometry candidate

```text
Use case: precise-object-edit
Asset type: geometry candidate for a layered Beyblade illustration
Input images: Image 1 is the edit target and authoritative assembled front view; Image 2 is geometry reference only for the clear wheel outer structure; Image 3 is style reference only.
Primary request: Correct only the yellow-green clear wheel's external physical geometry in Image 1 using Image 2.
Allowed geometry from Image 2: outer annular band profile, vertical slots, edge teeth, four mounting housings, their facet divisions, and circular recesses.
Do not import from Image 2: center ring, inner bridges, inner openings, alternate center panels, alternate flame ornaments, color, material, or lighting.
Preserve exactly: overall canvas and framing, complete assembled silhouette, all transparent holes, metal wheel, yellow lower parts, central face bolt, the full Libra sticker, upper and lower blue/yellow printing, text, symbols, scale, center, and rotation.
Style: clean cel-rendered mechanical illustration matching Image 3, crisp dark linework with major boundaries stronger than internal grooves.
Lighting/material: keep the existing yellow-green translucent-plastic appearance and centered symmetric lighting.
Avoid: new text, copied reference colors, photorealism, duplicate outlines, extra parallel lines, glow, white light blobs, scratches, blur, background changes, or any modification outside the clear wheel external-geometry zones.
This is a candidate only; prioritize mechanically coherent external contours and keep all protected artwork unchanged.
```

Disposition: comparison only. It regularized useful outer slots and mounting geometry but altered global geometry and protected pixels, so none of its final pixels were adopted.

## Flame-wheel visible internal geometry candidate

```text
Use case: precise-object-edit
Asset type: geometry candidate for a layered Beyblade illustration
Input images: Image 1 is the authoritative assembled front-view edit target; Image 2 is the rear-side Flame metal wheel geometry reference; Image 3 is the clean illustration style reference only.
Primary request: Correct the Flame metal wheel geometry in Image 1 using Image 2, including the exposed outer blades and the physically plausible internal annular plate, radial supports/spokes, stepped ring, and rounded cutout boundaries that would be visible beneath the translucent yellow-green clear wheel.
Adapt the rear-side topology from Image 2 into the assembled front orientation. Show only internal metal structure that is physically visible through or between the clear-wheel regions.
Preserve exactly: Image 1 canvas, overall assembled silhouette, transparent outer background and four holes, yellow track pieces, complete clear-wheel external geometry, central face bolt, full Libra sticker, upper and lower blue/yellow printing, text, symbols, scale, center, and rotation.
Do not copy from Image 2: the central bore under the face bolt, embossed BEYBLADE lettering, scratches, casting wear, stains, photographic texture, background, camera perspective, or directional photo lighting.
Style: clean cel-rendered mechanical illustration matching Image 3, bright gray zinc alloy with crisp major boundaries and simplified internal structure.
Lighting: centered frontal, symmetric left-right and top-bottom; no isolated white glare.
Avoid: new text, mirrored lettering, photorealism, extra duplicate contours, excessive parallel lines, black smears, glow, blur, or changing protected artwork.
This is a candidate only; prioritize mechanically coherent visible internal metal topology while keeping the assembled identity unchanged.
```

Disposition: rejected as a final geometry source. It introduced an eight-slot ring and generated background rather than the reference wheel's four-direction annular plate and radial supports. The V2 builder instead uses a deterministic four-direction trace derived from the photographed topology.
