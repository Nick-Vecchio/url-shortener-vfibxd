### To get shorter URL 

-  Run App
-  Send json with url to encode endpoint
    -  Address: POST http://localhost:3000/api/url/encode
    -  JSON example: {
            "url": "http://google.com"
        }
-  Shortened url will be returned:
    -  JSON example: {
            "url": "http://localhost:3000/AgQboE2lu"
        }

### To get original URL 

-  ***With app still running from getting shortened url***
-  Send json with shortened url to decode endpoint
    -  Address: POST http://localhost:3000/api/url/decode
    -  JSON example: {
            "url": "http://localhost:3000/AgQboE2lu"
        }
-  Original url will be returned:
    -  JSON example: {
            "url": "http://google.com"
        }