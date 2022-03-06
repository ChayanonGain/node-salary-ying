////require
const router = require(`../Node-Kong/router/myRouter`);
const express = require(`express`);
const path = require(`path`);
const app = express();

let PORT = process.env.PORT || 5007


app.set('views', path.join(__dirname ,'views'));
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}));
app.use(router);
app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT , ()=>{
    console.log(`Run server at port 5007`);
});