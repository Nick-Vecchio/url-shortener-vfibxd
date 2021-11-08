const express = require('express');
const shortid = require('shortid');

const router = express.Router();
const baseUrl = 'localhost 3000';
const urls = [];

router.post('/encode', encode(req, res));
router.post('/decode', decode(req, res));

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(3000, () => console.log('Server running on port 3000'));

const encode = async (req, res) => {
    const { longUrl } = req.body;
    const shortUrl = baseUrl + '/' + shortid.generate();

    urls.push({longUrl: longUrl, shortUrl: shortUrl});

    res.json({url: shortUrl});
};

const decode = async (req, res) => {
    const { shortUrl } = req.body;

    const longUrl = urls.find(o => o.shortUrl === shortUrl);
    
    res.json({url:longUrl});
};