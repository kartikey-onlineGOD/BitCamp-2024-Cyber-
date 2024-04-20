from PIL import Image

# Function to convert binary to text
def bin_to_text(binary):
    return ''.join(chr(int(binary[i:i+8], 2)) for i in range(0, len(binary), 8))

# Function to extract message from image using LSB
def extract_message(image_path):
    # Open the image
    img = Image.open(image_path)
    width, height = img.size

    binary_message = ''
    data_index = 0

    # Extract the message from the LSB of each color component
    for y in range(height):
        for x in range(width):
            pixel = img.getpixel((x, y))

            # Extract the LSB of each color component
            for i in range(3):
                binary_message += str(pixel[i] & 1)
                data_index += 1

                # Check for the delimiter indicating end of message
                if binary_message[-16:] == '1111111111111110':
                    return bin_to_text(binary_message[:-16])

# Example usage
image_with_message_path = "image-encoder\image_with_hidden_message.png"

extracted_message = extract_message(image_with_message_path)
print("Extracted message:", extracted_message)
