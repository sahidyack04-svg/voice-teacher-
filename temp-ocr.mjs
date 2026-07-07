import { createWorker } from 'tesseract.js';
(async () => {
  const worker = await createWorker('eng');
  for (const file of ['public/images/Event image 1.png','public/images/Event image 2.png','public/images/Event image 3.png']) {
    const { data: { text } } = await worker.recognize(file);
    console.log('FILE:', file);
    console.log(text.trim());
    console.log('---');
  }
  await worker.terminate();
})();
