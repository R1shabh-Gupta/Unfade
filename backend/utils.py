import torch
from PIL import Image
import numpy as np
from ESRGAN import RealESRGAN
import time

def enhance_image(image_path, output_path):
    try:
        print("Checking device availability...")
        device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        print(f"Using device: {device}")

        print("Initializing Real-ESRGAN model...")
        model = RealESRGAN(device, scale=4)
        print("Loading model weights...")
        model.load_weights('weights/RealESRGAN_x4.pth', download=True)
        print("Model loaded successfully.")

        print(f"Opening image: {image_path}")
        image = Image.open(image_path).convert('RGB')
        print("Image opened successfully.")

        print("Starting image enhancement...")
        start_time = time.time()
        sr_image = model.predict(image)
        end_time = time.time()
        elapsed_time = end_time - start_time
        print(f"Image enhancement completed in {elapsed_time:.2f} seconds.")

        print(f"Saving enhanced image to: {output_path}")
        sr_image.save(output_path)
        print("Enhanced image saved successfully.")
        return output_path

    except FileNotFoundError as fnf_error:
        print(f"File not found: {fnf_error}")
        raise
    except Exception as e:
        print(f"An error occurred: {e}")
        raise
