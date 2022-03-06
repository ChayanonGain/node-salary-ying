////require
const router = require(`../Ying-Salary/router/myRouter`);
const express = require(`express`);
const path = require(`path`);
const app = express();

let PORT = process.env.PORT || 5000;

app.use((req , res,next)=>{
res.header('Access-Control-Allow-Orgin','*');
res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type,Accept');
next();
})

app.set('views', path.join(__dirname ,'views'));
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}));
app.use(router);
app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT , ()=>{
    console.log(`Run server at port 5000`);
});