const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
    let data = {
        salary: "",
        pt: "",
        ot:"",
        sum: "",
    };
    res.render('index' ,{cal:data});
});

router.post('/cal',(req,res) =>{
    let costpt = 166;
    let resSala = Math.floor(req.body.salary);

    if(req.body.pt !== 0){
        resSala = (costpt * req.body.pt)
    }

    if(req.body.ot !== 0){
        let day = 30;
        let workhours = 11;
        let plus = 1.5;

        let calOt = (((req.body.salary / day / workhours) * plus) * req.body.ot);
        let tempPt = costpt * req.body.pt;
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

module.exports = router;
