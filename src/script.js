const fs = require('fs');


const content = 'Some content!hyghjgj';

fs.writeFile('./pages/users/test.txt', content, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});