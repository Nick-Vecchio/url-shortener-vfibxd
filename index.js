const express = require('express');
const shortid = require('shortid'); // Short ID Generator
const isValidHttpUrl = require('./validate.js');
// import { isValidHttpUrl } from './validate.mjs';

const router = express.Router(); // Create my router
const baseUrl = 'http://localhost:3000';  // Used for testing can be changed to short.est...
const urls = []; // In memory storage of long & short url translations in array

// Checks for valid url
// function isValidHttpUrl(string) {
//     let url;
 
//     try {
//        url = new URL(string);
//     } catch (_) {
//        return false;
//     }
 
//     return url.protocol === "http:" || url.protocol === "https:";
//  }

// Takes longUrl and returns shortUrl
router.post('/encode', async (req, res) => {
    const { url } = req.body;
    console.log(typeof isValidHttpUrl);
    if (!isValidHttpUrl(url)){
        return res.status(401).json('Invalid URL');
    }
    // Generate shortUrl
    const shortUrl = baseUrl + '/' + shortid.generate();

    // Save longUrl & shortUrl translation
    urls.push({longUrl: url, shortUrl: shortUrl});

    // Returns shortened url in JSON
    res.json({url: shortUrl});
});

// Takes shortUrl, looks up longUrl and returns it
router.post('/decode', async (req, res) => {

    // Send url
    const { url } = req.body;

    // Lookup longUrl for this shortUrl
    const longUrl = urls.find(_url => _url.shortUrl === url).longUrl;
    
    // Returns original url in JSON
    res.json({url: longUrl});
});

// Make new express app
const app = express();

// Use express.json
app.use(express.json());

// Use my router
app.use('/api/url', router);

// Run App
app.listen(3000, () => console.log('Server running on port 3000'));
