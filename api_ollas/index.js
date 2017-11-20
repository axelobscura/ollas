var express = require("express"),
    app = express(),
    port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("APP IS runnig " + port);
})
