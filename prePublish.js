const fs = require('fs');
const path = require('path');

const sourceFolder = path.resolve(__dirname, 'dist', 'src');
const destinationFolder = path.resolve(__dirname);

if (fs.existsSync(sourceFolder)) {
    try {
        fs.cpSync(sourceFolder, destinationFolder, {
            recursive: true,
        });

        console.log('source copied successfully');
    } catch (err) {
        console.error(err);
    }
}
