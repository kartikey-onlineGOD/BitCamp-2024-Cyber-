from PIL import Image

# Function to convert text to binary
def text_to_bin(text):
    return ''.join(format(ord(char), '08b') for char in text)

# Function to embed message into image using LSB
def embed_message(image_path, message):
    # Open the image
    img = Image.open(image_path)
    width, height = img.size

    # Convert message to binary
    binary_message = text_to_bin(message)
    message_length = len(binary_message)

    # Check if the image is large enough to hold the message
    if message_length > width * height * 3:
        raise ValueError("Message too large to embed in the image.")

    # Add a delimiter to mark the end of the message
    binary_message += '1111111111111110'

    data_index = 0
    # Embed the message into the image
    for y in range(height):
        for x in range(width):
            pixel = list(img.getpixel((x, y)))

            # Modify the LSB of each color component
            for i in range(3):
                if data_index < message_length:
                    pixel[i] = pixel[i] & ~1 | int(binary_message[data_index])
                    data_index += 1

            img.putpixel((x, y), tuple(pixel))

            # If message is embedded, save the image and return
            if data_index >= message_length:
                img.save("image-encoder/image_with_hidden_message.png")
                return "Message embedded successfully!"

# Example usage
image_path = "image-encoder\cyber-image-original.jpg"
message = "Atleast You Passed This Easy Test, But Lets See If You Pass The Next"

print(embed_message(image_path, message))
