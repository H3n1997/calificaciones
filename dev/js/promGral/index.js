var yo=require('yo-yo');
var circle=require('jquery-knob');
console.log(circle.knob);
module.exports=function (datos)
{
    var primer=ciclo(datos.primer);
    var segundo=ciclo(datos.segundo);
    var tercero=ciclo(datos.tercero);
    var prom=(primer+segundo+tercero)/3;

    return yo`<div class="row">
      <p class="col s12 general">Promedio General</p>
      <div class="col s10 offset-s2">
        <input type="text" class="dial" data-min="0" data-max="100" value=${prom.toFixed(1)*10}>
      </div>
    </div>`;
}


function ciclo(objeto)
{
  var prom=0;
  for(x in objeto)
  {
    prom=prom+objeto[x];
  }
  return prom/5;
}
