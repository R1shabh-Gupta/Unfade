import requests

url = 'http://127.0.0.1:5000/test-enhance'
image_path = 'inputs/lr_lion.jpg'

with open(image_path, 'rb') as image_file:
    response = requests.post(url, files={'image': image_file})

print(response.json())
