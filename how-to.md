### To get shorter URL 

**Any url can be used to encode not just example url**

-  ***Run App using npm start***
-  **Click Send Request**
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
   **Copy shortened url and paste into decode object**
-  **Click Send Request**
-  Send json with shortened url to decode endpoint
    -  Address: POST http://localhost:3000/api/url/decode
    -  JSON example: {
            "url": "http://localhost:3000/AgQboE2lu"
        }
-  Original url will be returned:
    -  JSON example: {
            "url": "http://google.com"
        }