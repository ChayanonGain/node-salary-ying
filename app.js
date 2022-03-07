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
        night:"",
        inchart:"",
        department:[{
            id:1,
            name:"ICU"
        },
        {
            id:2,
            name:"Ward"
        }],
        sum: "",
    };
    res.render('index' ,{cal:data});
});

app.post('/cal',(req,res) =>{
      
    let resSala = Math.floor(req.body.salary);
    let night = 150 * req.body.night;
    let inchart = 50 * req.body.inchart;
    let ptcost = 0

    console.log(req.body)
    if(req.body.department == 1){
       ptcost = 116 * req.body.pt;
    }
    else{
       ptcost = 106 * req.body.pt;
    }
    
    if(req.body.pt !== 0){
        resSala = (resSala + ptcost + night + inchart)
    }

    if(req.body.ot != 0){
        let day = 30;
        let workhours = 11;
        let plus = 1.5;

        let calOt = (((req.body.salary / day / workhours) * plus) * req.body.ot);
        resSala = (Math.floor(req.body.salary) + ptcost + inchart + night + calOt).toFixed(2);
    }
    let data = {
        salary:req.body.salary,
        pt:req.body.pt,
        ot:req.body.ot,
        night:req.body.night,
        inchart:req.body.inchart,
        department:[{
            id:1,
            name:"ICU"
        },
        {
            id:2,
            name:"Ward"
        }],
        sum:resSala
    }
    res.render(`index`,{cal:data});
})



app.listen(PORT , ()=>{
    console.log(`Run server at port 5000`);
});