def to_binary(data):
  if isinstance(data, str):
    return ''.join([format(ord(i), "08b") for i in data])
  elif isinstance(data, bytes) or isinstance(data, np.ndarray):
    return [format(i, "08b") for i in data]
  elif isinstance(data, int) or isinstance(data, np.uint8):
    return format(data, "08b")
 
def decode(image_name):
    print("[+] Decoding...")
    # read the image
    image = cv2.imread(image_name)
    binary_data = ""
    for row in image:
        for pixel in row:
            r, g, b = to_binary(pixel)
            binary_data += r[-1]
            binary_data += g[-1]
            binary_data += b[-1]
    # split by 8-bits
    all_bytes = [ binary_data[i: i+8] for i in range(0, len(binary_data), 8) ]
    # convert from bits to characters
    decoded_data = ""
    for byte in all_bytes:
        decoded_data += chr(int(byte, 2))
      
    return decoded_data

image_name = input("enter image name:")    
text = decode(image_name)
print(text)

