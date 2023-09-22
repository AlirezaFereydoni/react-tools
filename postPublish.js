const fs = require('fs');

const sources = ['./hooks', './utils'];

sources.forEach((src) => {
    if (fs.existsSync(src)) {
        try {
            fs.rm(src, { recursive: true });
        } catch (err) {
            console.error(err);
        }
    }
});
