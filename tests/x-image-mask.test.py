"""Focused alpha-only correction regression for official reflective metal."""
import importlib.util
from pathlib import Path
import tempfile
import unittest
import numpy as np
from PIL import Image

spec = importlib.util.spec_from_file_location('processor', Path(__file__).parents[1] / 'scripts/process-x-images.py')
processor = importlib.util.module_from_spec(spec)
spec.loader.exec_module(processor)


class MaskCorrectionTest(unittest.TestCase):
    def test_restore_connected_detail_preserves_original_rgb_and_background(self):
        source = np.full((448, 448, 3), 240, dtype=np.uint8)
        source[150:298, 150:298] = [10, 80, 140]
        source[195:220, 195:220] = [255, 255, 255]
        def remove(image, **kwargs):
            alpha = np.zeros((448, 448), dtype=np.uint8)
            alpha[150:298, 150:298] = 255
            alpha[195:220, 195:220] = 0
            return Image.fromarray(np.dstack((np.asarray(image), alpha)))
        with tempfile.TemporaryDirectory() as directory:
            source_path = Path(directory) / 'source.png'
            output_path = Path(directory) / 'out.webp'
            Image.fromarray(source).save(source_path)
            processor.process_image(source_path, output_path, None, remove,
                alpha_matting=False, preserve_source_pixels=True,
                source_restore_points=[[205, 205]])
            result = np.asarray(Image.open(output_path).convert('RGBA'))
            self.assertEqual(result[205, 205, 3], 255)
            self.assertEqual(result[0, 0, 3], 0)
            visible = result[:, :, 3] > 3
            np.testing.assert_array_equal(result[:, :, :3][visible], source[visible])


if __name__ == '__main__':
    unittest.main()
