const http=require('http');
const url=require('url');
const data=require('./data.json');
const config=require('./config');
const uuid=require('uuid/v4');
let key=uuid().replace(/\-/g,'');
http.createServer((req,res)=>{
    let {pathname,query}=url.parse(req.url,true);
    res.setHeader('Access-Control-Allow-origin','*');
    if(pathname==='/api/key'){
        if(req.method==='POST'){
            res.write(JSON.stringify({key,code:0,data:key,msg:'success'}));
        }else{
            res.write(JSON.stringify({key:null,code:1,data:'',msg:'fail'}));
        }
    }else if(pathname.startsWith('/api')){
        if(req.method==='GET'){
            let {token}=query;
            let name=pathname.match(/\/api\/([a-z]+)/)[1];
            if(!token || token!==key){
                res.write(JSON.stringify({code:1,data:'',msg:'fail'}));
            }else{
                res.write(JSON.stringify({code:0,data:data[name],msg:'success'}));
            }
        }
    }
    res.end();
}).listen(config.HTTP_PORT,()=>{
    console.log('已运行');
})