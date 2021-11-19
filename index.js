const express = require('express');
const shortid = require('shortid'); // Short ID Generator
const {isValidHttpUrl} = require('./validate'); // Custom URL Validator

//const isValidHttpUrl = require('./validate.js');
// import { isValidHttpUrl } from './validate.mjs';
//const validUrl = require('./validate.js');


const router = express.Router(); // Create my router
const baseUrl = 'http://localhost:3000';  // Used for testing can be changed to short.est...
const urls = []; // In memory storage of long & short url translations in array

// Takes longUrl and returns shortUrl
router.post('/encode', async (req, res) => {

    try {

    const { url } = req.body;

    console.log('url', url);

    // Validate Inputted Url
    if (!isValidHttpUrl(url)){
        return res.status(401).json('Invalid URL');
    }

    // Generate shortUrl
    const shortUrl = baseUrl + '/' + shortid.generate();

    // Save longUrl & shortUrl translation
    urls.push({longUrl: url, shortUrl: shortUrl});
    
    // Returns shortened url in JSON
    res.json({url: shortUrl});

    } catch (error) {
        console.log(error);
        }
});

// Takes shortUrl, looks up longUrl and returns it
router.post('/decode', async (req, res) => {

    try {

    // Send url
    const { url } = req.body;
    
    // Lookup longUrl for this shortUrl
    const longUrl = urls.find(_url => _url.shortUrl === url).longUrl;
    console.log('longUrl3', longUrl);
    // Returns original url in JSON
    res.json({url: longUrl});
    
    } catch (error) {
        console.log('decode error', error);
    }
});

// Make new express app
const app = express();

// Use express.json
app.use(express.json());

// Use my router
app.use('/api/url', router);

// Run App
app.listen(3000, () => console.log('Server running on port 3000'));
