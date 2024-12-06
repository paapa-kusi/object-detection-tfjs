
# Object Detection on Images

This project is a **web-based application** that allows users to upload an image and detect objects within it using a **pre-trained COCO-SSD model**. The application overlays bounding boxes, labels, and confidence scores on the detected objects, providing a seamless and interactive user experience. You can test it out <a href="https://object-detection-pk.netlify.app">here.</a>

---

## Features

- **Real-Time Object Detection**  
  Detect objects in uploaded images using the TensorFlow.js implementation of the COCO-SSD model.
  
- **Interactive Visual Feedback**  
  Bounding boxes and labels are drawn directly on the uploaded image using an HTML5 Canvas.

- **Responsive User Interface**  
  A clean, visually appealing design with instructions and interactive elements for easy use.
  ![Main Screen](resources/menu.png)

---

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/object-detection-app.git
   cd object-detection-app
   ```
2. Open the `index.html` file in a web browser.

3. Upload an image by clicking the file input.

4. View the detected objects directly on the image.

---

## Future Enhancements

- Add support for video input and real-time object detection.
- Extend the application with additional models for specialized object detection tasks.
- Improve visualization options, such as confidence thresholds and customizable annotations.

---

This project demonstrates the powerful combination of machine learning and web technologies to create an interactive and accessible application.
