from flask import Flask, request, jsonify, send_file
import os
from utils import enhance_image

app = Flask(__name__)

@app.route('/')
def home():
    """
    Home endpoint to check if the API is running.

    Returns:
        str: Welcome message.
    """
    return "Welcome to the Real-ESRGAN Image Enhancement API!"



@app.route('/enhance', methods=['POST'])
def enhance():
    """
    Endpoint to enhance an uploaded image using Real-ESRGAN.

    Expects:
        file: An image file uploaded with the key 'image'.

    Returns:
        file: The enhanced image if successful.
        json: An error message if unsuccessful.
    """
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files['image']
    image_path = os.path.join('inputs', image_file.filename)
    output_path = os.path.join('results', f"enhanced_{image_file.filename}")

    try:
        image_file.save(image_path)
        enhanced_image_path = enhance_image(image_path, output_path)
        return send_file(enhanced_image_path, mimetype='image/png')

    except FileNotFoundError as fnf_error:
        return jsonify({"error": str(fnf_error)}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500


"""--------------------------------------------------------------------------------------------------------------------------------------------
                                                        For TESTING ONLY 
  --------------------------------------------------------------------------------------------------------------------------------------------
                                              """

@app.route('/test-enhance', methods=['POST'])
def test_enhance():
    """
    Test endpoint to enhance an uploaded image using Real-ESRGAN and return a success message.

    Expects:
        file: An image file uploaded with the key 'image'.

    Returns:
        json: A success message and the path to the enhanced image if successful.
        json: An error message if unsuccessful.
    """
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files['image']
    image_path = os.path.join('inputs', image_file.filename)
    output_path = os.path.join('results', f"enhanced_{image_file.filename}")

    try:
        image_file.save(image_path)
        enhanced_image_path = enhance_image(image_path, output_path)
        return jsonify({"message": "Image enhanced successfully", "enhanced_image_path": enhanced_image_path}), 200

    except FileNotFoundError as fnf_error:
        return jsonify({"error": str(fnf_error)}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
