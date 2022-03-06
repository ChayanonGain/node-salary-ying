



const connect = true;
const url1 = `www.google.co.th`;

function downloading(url){
    return new Promise(function(resolve , reject){
        console.log(`Require is Process.....`)
        setTimeout(() => {
            if(connect){
                resolve(`Download ${url} Complete`)
            }
            else{
                reject(`Download Fail!!`)
            }
        }, 3000);
    });
};


downloading(url1).then(result => {
    console.log(result);
}).catch(err =>{
    console.log(err)
}).finally(() =>{
    console.log(`End of Process`)
});