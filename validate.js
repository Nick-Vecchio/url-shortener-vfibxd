const isValidHttpUrl = input => {
   let url;
 
    try {
       url = new URL(input);
    } catch (error) {
       console.log(error);
       return false;
    }
 
    return url.protocol === "http:" || url.protocol === "https:";
};


 module.exports = {
    isValidHttpUrl
 };
