from PIL import Image

def bin_to_text(binary):
    return ''.join(chr(int(binary[i:i+8], 2)) for i in range(0, len(binary), 8))

def extract_message(image_path):
    img = Image.open(image_path)
    binary_message = ''
    
    for y in range(img.height):
        for x in range(img.width):
            pixel = img.getpixel((x, y))
            for i in range(3):
                binary_message += str(pixel[i] & 1)
                if binary_message[-16:] == '1111111111111110':
                    return bin_to_text(binary_message[:-16])

# Usage
image_with_message_path = "img-maker/cyber-image-encoded.png"
extracted_message = extract_message(image_with_message_path)
print("Extracted message:", extracted_message)
