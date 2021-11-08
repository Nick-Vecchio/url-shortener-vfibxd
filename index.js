const express = require('express');
const shortid = require('shortid');

const router = express.Router();
const baseUrl = 'http://localhost:3000';
const urls = [];

router.post('/encode', async (req, res) => {
    const { url } = req.body;
    const shortUrl = baseUrl + '/' + shortid.generate();

    urls.push({longUrl: url, shortUrl: shortUrl});

    res.json({url: shortUrl});
});

router.post('/decode', async (req, res) => {
    const { url } = req.body;

    const longUrl = urls.find(o => o.shortUrl === url).longUrl;
    
    res.json({url: longUrl});
});

const app = express();
app.use(express.json());
app.use('/api/url', router);


app.listen(3000, () => console.log('Server running on port 3000'));
