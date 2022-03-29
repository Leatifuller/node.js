const { header } = require('express/lib/request');
const path=require('path');
fs=require('fs');

const chirps=[
    {
        "id":1,
       "username":"Tia",
        "text":"Hello World"
    },
    {
        "id":2,
        "username": "Mia",
        "text":"Awesome weatyher today!"
    },
    {
        "id":3,
        "username":"Bia",
        "text":"Grand rising all!"
    },
    {
        "id":4,
        "username":"Ria",
        "text":"Whats up"
    },
    {
        "id":5,
        "username":"Zia",
        "text":"Its only up from here."
    }
]
const chirpPath=path.join(__dirname, 'chirps.json');
const chirpData=JSON.stringify(chirps);
fs.writeFileSync(chirpPath, chirpData);
const chirpsFromFile=fs.readFileSync(chirpPath);
console.log(JSON.parse(chirpsFromFile));