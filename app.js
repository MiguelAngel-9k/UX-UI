const express = require('express');
//const cors = require('cors');
const app = express();

//app.use = cors();
app.use( express.json())
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile('login_signing.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/public/login_signing.html')
})

app.post('/login',(req,res)=>{

    res.json(req.data);
    

})

app.listen(3000);
