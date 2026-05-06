export interface Practical {
  id: string;
  title: string;
  aim: string;
  theory?: string;
  keyOperations?: string[];
  code: string;
  tags: string[];
}

export const practicals: Practical[] = [
  {
    id: "1",
    title: "Practical 1",
    aim: "To study the representation of images using arrays and matrices in Python, and to perform basic operations using Numpy and Matplotlib.",
    theory: "A digital image is a 2D grid of pixels. In Python, these are represented as NumPy arrays. A grayscale image is a 2D matrix ($M \\times N$), while a color image is a 3D tensor ($M \\times N \\times 3$).",
    keyOperations: ["cv2.imread()", "plt.imshow()", "img.shape"],
    code: `import numpy as np 
import matplotlib.pyplot as plt 
 # Array representation. 
a1 = np.array([1,2,3,4,5,6,7,8,9,10]) 
a2 = np.array([[1,2,3,4,5,6,7,8,9,10], 
 [1,2,3,4,5,6,7,8,9,10], 
 [1,2,3,4,5,6,7,8,9,10],]) 
a3 = np.array([[[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]], 
 [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]], 
 [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]],]) 
# Basic image representation. 
img = plt.imread(r"C:\\Users\\khawa\\Downloads\\1.png") 
plt.imshow(img) 
plt.title("Original Image") 
plt.show() 

#Attributes 
print("1D Array is \\n",a1) 
print("2D Array is \\n",a2) 
print("3D Array is \\n",a3) 
print("Shape of 1D Array is",a1.shape) 
print("Shape of 2D Array is",a2.shape) 
print("Shape of 3D Array is",a3.shape) 
print("Dimension of 1D Array is",a1.ndim) 
print("Dimension of 2D Array is",a2.ndim) 
print("Dimension of 3D Array is",a3.ndim) 
print("Datatype of 1D Array is",a1.dtype) 
print("Datatype of 2D Array is",a2.dtype) 
print("Datatype of 3D Array is",a3.dtype) 
print("Length of 1D Array is",len(a1)) 
print("Length of 2D Array is",len(a2)) 
print("Length of 3D Array is",len(a3)) 
#Functions 
print("Sum of A:",a1.sum()) 
print("Sum of B:",a2.sum()) 
print("Sum of C:",a3.sum()) 
print("Mean of A:",a1.mean()) 
print("Mean of B:",a2.mean()) 
print("Mean of C:",a3.mean()) 
print("Argmin of A:",a1.argmin()) 
print("Argmin of B:",a2.argmin()) 
print("Argmin of C:",a3.argmin()) 
print("Argmax of A",a1.argmax()) 
print("Argmax of B",a2.argmax()) 
print("Argmax of C",a3.argmax()) 
print("Reshape of A",a1.reshape(10)) 
print("Reshape of B",a2.reshape(1,30)) 
print("Reshape of C",a3.reshape(3,2,10)) 
print("Zeros:",np.zeros((3,3))) 
print("Ones:",np.ones((3,3))) 
print("Identity:",np.identity(3)) 
#Matrix 
imgr=np.zeros((9000,9000,3),np.uint8) 
imgr[0:3000]=(229,104,14) 
imgr[3000:6000]=(245,220,215) 
imgr[6000:9000]=(150,230,165) 
plt.imshow(imgr) 
plt.show()`,
    tags: ["NumPy", "Matplotlib", "Arrays", "Matrices"]
  },
  {
    id: "2",
    title: "Practical 2",
    aim: "To implement and analyze image representation using different color models.",
    theory: "RGB:- Red, Green, Blue; standard for digital displays. HSV:- Hue, Saturation, and Value; ideal for color-based segmentation. Grayscale:- Single-channel intensity (0-255).",
    code: `import numpy as np 
import matplotlib.pyplot as plt 
import cv2 
path = (r"C:\\Users\\khawa\\Downloads\\tiger.jpg") 
img = cv2.imread(path,1) 
plt.subplot(2,2,1) 
plt.imshow(img) 
# image attributes 
print('Size of image:',img.size) 
print('Dimension of image:',img.ndim) 
print('Datatypes of image:',img.dtype) 
print('Shape of image:',img.shape) 
# color conversions 
rgb = cv2.cvtColor(img,cv2.COLOR_BGR2RGB) 
plt.subplot(2,2,2) 
plt.imshow(rgb) 
gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) 
plt.subplot(2,2,3) 
plt.imshow(gray,cmap="gray") 
hsv = cv2.cvtColor(img,cv2.COLOR_BGR2HSV) 
plt.subplot(2,2,4) 
plt.imshow(hsv) 
plt.show()`,
    tags: ["Color Models", "RGB", "HSV", "Grayscale", "cvtColor"]
  },
  {
    id: "3",
    title: "Practical 3",
    aim: "To perform arithmetic and bitwise operations on digital images using OpenCV.",
    theory: "Arithmetic Operations:- Addition (cv2.add()), Subtraction (cv2.subtract()). Bitwise Operations:- AND/OR/XOR/NOT for masking.",
    code: `import cv2 
import numpy as np 
image1 = cv2.imread(r"C:\\Users\\khawa\\OneDrive\\Pictures\\image_1.jpg") 
image2 = cv2.imread(r"C:\\Users\\khawa\\Downloads\\flowers.jpg") 
cv2.imshow("image1",image1) 
cv2.imshow("image2",image2) 
cv2.waitKey(0) 
cv2.destroyAllWindows() 
#Arithmatic Operations 
imageAdd=cv2.add(image1,image2) 
imageSubtract=cv2.subtract(image1,image2) 
cv2.imshow('Image Add',imageAdd) 
cv2.waitKey(0) 
cv2.destroyAllWindows() 
cv2.imshow('Image Subtract',imageSubtract) 
cv2.waitKey(0) 
cv2.destroyAllWindows() 
# BitWise Operations 
print("Image1",image1.size) 
print("Image2",image2.size) 
img_or=cv2.bitwise_or(image1,image2) 
img_and=cv2.bitwise_and(image1,image2) 
img_xor=cv2.bitwise_xor(image1,image2) 
img_not=cv2.bitwise_not(image1,image2) 
cv2.imshow("Image OR",img_or) 
cv2.waitKey(0) 
cv2.destroyAllWindows() 
cv2.imshow("Image AND",img_and) 
cv2.waitKey(0) 
cv2.destroyAllWindows() 
cv2.imshow("Image XOR",img_xor) 
cv2.waitKey(0) 
cv2.destroyAllWindows() 
cv2.imshow("Image NOT",img_not) 
cv2.waitKey(0) 
cv2.destroyAllWindows()`,
    tags: ["Arithmetic", "Bitwise", "OpenCV", "Masking"]
  },
  {
    id: "4a",
    title: "Practical 4A",
    aim: "To implement gray level slicing, contrast stretching, and thresholding.",
    theory: "Thresholding:- binary conversion. Contrast Stretching:- expanding intensity range. Gray Level Slicing:- highlighting intensity range.",
    code: `import cv2 
import numpy as np 
import matplotlib.pyplot as plt 
# Read image in grayscale 
img = cv2.imread(r"C:\\Users\\khawa\\Downloads\\tiger.jpg ") 
# Gray level slicing 
min_val = 100 
max_val = 180 
gray_slice = np.where((img >= min_val) & (img <= max_val), 255, img) 
# Contrast stretching 
f_min = np.min(img) 
f_max = np.max(img) 
contrast_stretch = ((img - f_min) / (f_max - f_min)) * 255 
contrast_stretch = contrast_stretch.astype(np.uint8) 
# Thresholding 
_, threshold = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY) 
# --- Matplotlib subplot view --- 
fig, axs = plt.subplots(2, 2, figsize=(10, 8)) 
axs[0, 0].imshow(img, cmap='gray') 
axs[0, 0].set_title("Original Image") 
axs[0, 0].axis('off') 
axs[0, 1].imshow(gray_slice, cmap='gray') 
axs[0, 1].set_title("Gray Level Slicing") 
axs[0, 1].axis('off') 
axs[1, 0].imshow(contrast_stretch, cmap='gray') 
axs[1, 0].set_title("Contrast Stretching") 
axs[1, 0].axis('off') 
axs[1, 1].imshow(threshold, cmap='gray') 
axs[1, 1].set_title("Thresholding") 
axs[1, 1].axis('off') 
plt.tight_layout() 
plt.show()`,
    tags: ["Slicing", "Thresholding", "Contrast stretching"]
  },
  {
    id: "4b",
    title: "Practical 4B",
    aim: "To implement histogram equalization to enhance image contrast.",
    theory: "This method spreads out the most frequent intensity values, effectively increasing the global contrast.",
    code: `import cv2 
import matplotlib.pyplot as plt 
img =cv2.imread(r"C:\\Users\\khawa\\Downloads\\panda.jpg") 
# Convert to grayscale 
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) 
# Apply histogram equalization 
equalized = cv2.equalizeHist(gray) 
# Show images 
plt.subplot(1,2,1) 
plt.title("Original Grayscale") 
plt.imshow(gray, cmap="gray") 
plt.subplot(1,2,2) 
plt.title("Equalized") 
plt.imshow(equalized, cmap="gray") 
plt.show() 
# Histograms 
plt.subplot(2,2,3) 
plt.title("Original Histogram") 
plt.hist(gray.ravel(), bins=256, range=[0,256], color='blue') 
plt.xlabel("Pixel Intensity") 
plt.ylabel("Frequency") 
plt.subplot(2,2,4) 
plt.title("Equalized Histogram") 
plt.hist(equalized.ravel(), bins=256, range=[0,256], color='green') 
plt.xlabel("Pixel Intensity") 
plt.ylabel("Frequency") 
plt.tight_layout() 
plt.show()`,
    tags: ["Histogram", "Equalization", "Contrast Enhancement"]
  },
  {
    id: "5",
    title: "Practical 5",
    aim: "To perform image blurring, resizing, and edge detection using Sobel and Laplacian operators.",
    theory: "Sobel:- gradient-based edge detection. Laplacian:- second-order derivative for fine edges. Preprocessing:- blurring via cv2.blur() or GaussianBlur().",
    code: `import cv2 
import numpy as np 
import matplotlib.pyplot as plt 
img = cv2.imread(r"C:\\Users\\khawa\\Downloads\\flower.jpg") 
blur = cv2.blur(img,(5,10)) 
plt.subplot(121),plt.imshow(img),plt.title("Original") 
plt.subplot(122),plt.imshow(blur),plt.title("Blured") 
plt.show() 
img = cv2.resize(img,(500,450),interpolation=cv2.INTER_CUBIC) 
gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) 
laplacian = cv2.Laplacian(gray,cv2.CV_64F) 
sobelx = cv2.Sobel(gray,cv2.CV_64F,1,0,ksize=7) 
sobely = cv2.Sobel(gray,cv2.CV_64F,0,1,ksize=7) 
sobel = cv2.bitwise_and(sobelx,sobely) 
plt.show() 
plt.subplot(2,2,1) 
plt.imshow(laplacian,cmap="gray") 
plt.title("Laplacian") 
plt.subplot(2,2,2) 
plt.imshow(sobelx,cmap="gray") 
plt.title("SobelX") 
plt.subplot(2,2,3) 
plt.imshow(sobely,cmap="gray") 
plt.title("SobelY") 
plt.subplot(2,2,4) 
plt.imshow(sobel,cmap="gray") 
plt.title("Sobel") 
plt.show()`,
    tags: ["Edge Detection", "Blurring", "Sobel", "Laplacian"]
  },
  {
    id: "6",
    title: "Practical 6",
    aim: "To perform segmentation using Otsu’s thresholding and contour detection.",
    theory: "Otsu's Method:- automatic thresholding. Contours:- cv2.findContours() for identifying boundaries.",
    code: `import cv2 
img = cv2.imread(r"C:\\Users\\khawa\\Downloads\\bee.jpg") 
gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) 
cv2.imshow("Image",gray) 
ret,thresh=cv2.threshold(gray,0,255,cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU) 
cnts,heir=cv2.findContours(thresh.copy(),cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE) 
cv2.drawContours(img,cnts,-1,(0,255,0),3) 
cv2.imshow("Contour",img) 
cv2.waitKey(0)`,
    tags: ["Segmentation", "Otsu", "Contours"]
  },
  {
    id: "7",
    title: "Practical 7",
    aim: "To study erosion, dilation, opening, and closing on binary images.",
    theory: "Erosion (shrinks), Dilation (adds boundaries), Opening (remove noise), Closing (fill gaps). Morphological gradients and Tophat.",
    code: `import cv2 
import numpy as np 
import matplotlib.pyplot as plt 
# Read image 
img = cv2.imread(r"C:\\Users\\khawa\\Downloads\\couple.jpg") 
# Convert to grayscale for thresholding 
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) 
# Otsu's thresholding 
_, binr = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU) 
# Kernel 
kernel = np.ones((5,5), np.uint8) 
# Morphological operations 
invert = cv2.bitwise_not(binr) 
erosion = cv2.erode(invert, kernel, iterations=1) 
dilation = cv2.dilate(invert, kernel, iterations=1) 
opening = cv2.morphologyEx(binr, cv2.MORPH_OPEN, kernel, iterations=1) 
closing = cv2.morphologyEx(binr, cv2.MORPH_CLOSE, kernel, iterations=1) 
invert_gradient = cv2.morphologyEx(invert,cv2.MORPH_GRADIENT,kernel) 
tophat = cv2.morphologyEx(binr,cv2.MORPH_TOPHAT,kernel) 
# Collect images and titles 
images = [img, erosion, dilation, opening, closing, invert_gradient, tophat] 
titles = ['Original', 'Erosion', 'Dilation', 'Opening', 'Closing','Invert Gradient','Tophat'] 
# Plot results 
plt.figure(figsize=(10,8)) 
for i in range(len(images)): 
 plt.subplot(2,4,i+1) 
 # Convert original image to RGB for correct display 
 if titles[i] == 'Original': 
  plt.imshow(cv2.cvtColor(images[i], cv2.COLOR_BGR2RGB)) 
 else: 
  plt.imshow(images[i], cmap='gray') 
 plt.title(titles[i]) 
 plt.xticks([]), plt.yticks([]) 
plt.tight_layout() 
plt.show()`,
    tags: ["Morphology", "Erosion", "Dilation", "Opening", "Closing"]
  },
  {
    id: "8a",
    title: "Practical 8A",
    aim: "To implement RLE for image data compression.",
    theory: "RLE is a lossless technique that replaces sequences of identical data values with a single value and a count.",
    code: `# Runlength Encoding
import cv2 
import numpy as np 
# Step 1 
img = cv2.imread(r"C:\\Users\\khawa\\Downloads\\images.jpg") 
# Step 2 
pixels = img.flatten() 
# Step 3 
rle = [] 
prev_pixel=pixels[0] 
count = 1 
for pixel in pixels[1:]: 
 if pixel == prev_pixel: 
  count += 1 
 else: 
  rle.append((prev_pixel,count)) 
  prev_pixel=pixel 
  count = 1 
# Append last run 
rle.append((prev_pixel,count)) 
# Step 4 
print("RLE Output(first 20 values):") 
for pair in rle[:20]: 
 print(pair) 
# Step 5 
original_size = len(pixels) 
compressed_size = len(rle) 
print("\\nOriginal Size",original_size) 
print("Compressed size",compressed_size)`,
    tags: ["Compression", "RLE", "Lossless"]
  },
  {
    id: "8b",
    title: "Practical 8B",
    aim: "To implement image compression using Huffman Coding based on pixel frequency.",
    theory: "Assign shorter binary codes to frequent pixels and longer codes to rare pixels via Huffman Tree.",
    code: `import cv2 
from collections import Counter 
import heapq 
# Step 1: Read Image (grayscale) 
img = cv2.imread(r"C:\\Users\\khawa\\Downloads\\gry.jpg", 
cv2.IMREAD_GRAYSCALE) 
# Step 2: Flatten image to 1D array 
pixels = img.flatten() 
# Step 3: Calculate frequency 
freq = Counter(pixels) 
# Step 4: Build Huffman Tree 
heap = [[weight, [symbol, ""]] for symbol, weight in freq.items()] 
heapq.heapify(heap) 
while len(heap) > 1: 
 low1 = heapq.heappop(heap) 
 low2 = heapq.heappop(heap) 
 for pair in low1[1:]: 
  pair[1] = '0' + pair[1] 
 for pair in low2[1:]: 
  pair[1] = '1' + pair[1] 
 heapq.heappush(heap, [low1[0] + low2[0]] + low1[1:] + low2[1:]) 
# Step 5: Generate Huffman Codes 
huffman_codes = sorted(heap[0][1:], key=lambda p: (len(p[-1]), p)) 
code_dict = {symbol: code for symbol, code in huffman_codes} 
# Step 6: Encode image 
encoded_image = "".join([code_dict[pixel] for pixel in pixels]) 
# Step 7: Print Results 
print("Huffman Codes:") 
for k, v in list(code_dict.items())[:10]: 
 print(f"{k}: {v}") 
print("\\nOriginal size(bits):", len(pixels) * 8) 
print("Compressed size(bits):", len(encoded_image))`,
    tags: ["Compression", "Huffman", "Encoding"]
  }
];
