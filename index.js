// HTML References
// File input
const fileInput = document.getElementById('fileInput');
// Image element
const image = document.getElementById('image');
// Canvas element
const canvas = document.getElementById('canvas');

async function initialize() {
    // Load model
    const model = await cocoSsd.load();

    // Event listener for file input
    fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = async (e) => {
        image.src = e.target.result;
    };
    reader.readAsDataURL(file);
    image.onload = async () => {
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);

        // Detect objects in image
        const predictions = await model.detect(canvas);
        
        // Draw bbox and labels
        predictions.forEach(prediction => {
            ctx.beginPath();
            ctx.rect(...prediction.bbox);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'red';
            ctx.fillStyle = 'red';
            ctx.stroke();
            ctx.fillText(`${prediction.class} (${prediction.score.toFixed(2) * 100}%)`, prediction.bbox[0], prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10);
        });
    }
})

}

// Call function 
document.addEventListener('DOMContentLoaded', initialize);





