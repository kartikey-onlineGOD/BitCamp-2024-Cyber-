from PIL import Image

def text_to_bin(text):
    return ''.join(format(ord(char), '08b') for char in text)

def embed_message(image_path, message, output_path):
    img = Image.open(image_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')

    binary_message = text_to_bin(message) + '1111111111111110'
    message_length = len(binary_message)

    if message_length > img.width * img.height * 3:
        raise ValueError("Message too large to embed in the image.")

    data_index = 0
    for y in range(img.height):
        for x in range(img.width):
            pixel = list(img.getpixel((x, y)))
            for i in range(3):
                if data_index < message_length:
                    pixel[i] = pixel[i] & ~1 | int(binary_message[data_index])
                    data_index += 1
            img.putpixel((x, y), tuple(pixel))
            if data_index >= message_length:
                img.save(output_path, 'PNG')
                return "Message embedded successfully!"

# Usage
image_path = "img-maker/cyber-image-original.jpg"
output_path = "img-maker/cyber-image-encoded.png"
message = "At leaSt you PasseD thIs easY TEst, but Let's sEE if YoU pasS the nEXt"
code = "ASPDIYTELEEYUSEX"
print(embed_message(image_path, message, output_path))
