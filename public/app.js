const express = require('express')
const mailjet = require('mailjet')
const path =  require('path')
const app = express();
const port = process.env.port || 8080;

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname) + '/../public' + 'index.html')
})
app.listen(port ,
    ()=>console.log('its alive'))


    console.log(mailjet);

