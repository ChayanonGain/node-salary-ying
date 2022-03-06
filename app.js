////require
//const router = require(`..salary-node-ying/router/myRouter`);
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
//app.use(router);
app.use(express.static(path.join(__dirname,'public')));

app.get(`/`, (req, res) => {
    let data = {
        salary: "",
        pt: "",
        ot:"",
        sum: "",
    };
    res.render('index' ,{cal:data});
});

app.post('/cal',(req,res) =>{
    
    
    let resSala = Math.floor(req.body.salary);
    let ptcost = 116;

    if(req.body.pt !== 0){
        resSala = (ptcost * req.body.pt)
    }

    if(req.body.ot !== 0){
        let day = 30;
        let workhours = 11;
        let plus = 1.5;

        let calOt = (((req.body.salary / day / workhours) * plus) * req.body.ot);
        let tempPt = ptcost * req.body.pt;
        resSala = (Math.floor(req.body.salary) + tempPt + calOt).toFixed(2);
    }
    let data = {
        salary:req.body.salary,
        pt:req.body.pt,
        ot:req.body.ot,
        sum:resSala
    }
    res.render(`index`,{cal:data});
})



app.listen(PORT , ()=>{
    console.log(`Run server at port 5000`);
});