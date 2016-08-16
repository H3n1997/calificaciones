var page=require('page');
var yo=require('yo-yo');
var PromedioGral=require('../promGral/index');
var parcial=require('../parcial/index');
var hamer=require('hammerjs');
var contenedor=document.getElementById('container');
var estudiante={
    nombre:'carlos',
    contra:'150908',
    primer:
    {
    pro:9,
    mate:8,
    ingles:5,
    conta:7,
    admi:8
    },
    segundo:
    {
    pro:10,
    mate:10,
    ingles:9,
    conta:5,
    admi:10
    },
    tercero:
    {
    pro:10,
    mate:6,
    ingles:0,
    conta:5,
    admi:0
    }

}





page('/',function(ctx,next){
  contenedor.appendChild(formulario);
});

page('/calificaciones',function(ctx,next){
  contenedor.appendChild(PromedioGral(estudiante));
  $(".dial").knob({readOnly:true});

  $('p#btn-menu').on('click',function(){
    $('div#menu').toggleClass('menu');

  });
});


page('/parcial',function(ctx,next){
  contenedor.appendChild(parcial(estudiante));
  $(".dial").knob({readOnly:true});

  $('p#btn-menu').on('click',function(){
    $('div#menu').toggleClass('menu');

  });
});





var formulario=yo`
<div class="row">
    <form class="col s12" onsubmit=${logeo}>
      <div class="row">
        <div class="input-field col s12">
          <i class="fa fa-user prefix"></i>
          <input id="usuario icon_prefix" type="text" class="validate" >
          <label for="icon_prefix">Usuario</label>
        </div>
        <div class="input-field col s12">
          <i class="fa fa-unlock prefix"></i>
          <input id="icon_telephone" type="password" class="validate"  name="pass">
          <label for="icon_telephone">Contraseña</label>
        </div>
        <div class="input-field col s9 offset-s3">
            <button class="btn btn-flat cyan" type="submit">Logearse</button>
        </div>
      </div>
    </form>
  </div>`;


function logeo(ev)
{
  ev.preventDefault();
  var usuario=document.getElementsByTagName('input')[0].value;
  var contra=document.getElementsByTagName('input')[1].value;
  if(usuario==estudiante.nombre && contra==estudiante.contra)
    {
      window.location="/calificaciones";
    }
  else{window.location="/";}

}

page();
