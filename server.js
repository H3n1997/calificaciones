var express=require('express');
var app=express();


app.use(express.static('sources'));
app.set('views','./views');
app.set('view engine','jade');


app.get('/',function(req,res){

 res.render('index');
});

app.get('/calificaciones',function(req,res){
  res.render('dashboard');
});

app.get('/parcial',function(req,res){
  res.render('dashboard');
})

app.listen(8000,function(){
  console.log("Working Server");
});
