const express = require("express");
const port = process.env.PORT||5000;

const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('csspro'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/csspro/index.html');
});

app.post('/',(req,res)=>{
    console.log(req.body);
   
    res.sendFile(__dirname+"/csspro/submit.html");
});



app.listen(3000,()=>{
    console.log(`server is successfully running at port ${port}`)
});
