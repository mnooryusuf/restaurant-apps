const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/jpg/hero');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-large.jpg`));

    // mengubah ukuran gambar dengan lebar 650px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(650)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.jpg`));
  });

const targetTesti = path.resolve(__dirname, 'src/public/images/jpg/testimonials');
const destinationTesti = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destinationTesti)) {
  fs.mkdirSync(destinationTesti);
}

fs.readdirSync(targetTesti)
  .forEach((image) => {
    sharp(`${targetTesti}/${image}`)
      .resize(60)
      .toFile(path.resolve(__dirname, `${destinationTesti}/${image.split('.')
        .slice(0, -1)
        .join('.')}-sharp.jpg`));
  });
