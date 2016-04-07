db=db.getSiblingDB("Script");
colecciones=[];

for (var i=0; i<10 ; i++){
  dato="coleccion"+i;
  colecciones.push(dato);
}

for (var i=0 ; i < colecciones.length ; i+=2) {
  comando='db.'+colecciones[i]+'.insert({"dato":"Tengo Datos"})';
  eval(comando);
}

for (var i=1 ; i < colecciones.length ; i+=2) {
  comando='db.createCollection("'+colecciones[i]+'")';
  eval(comando);
}
