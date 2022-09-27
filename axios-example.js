const axios = require('axios');

axios.get("https://www.youtube.com")
.then(function(response){
 console.log(response)
})
.catch(function(error){
 console.log("error")
})
.finally(function() {
 console.log("Axios finished")
})