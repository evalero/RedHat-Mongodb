db=db.getSiblingDB('Script')

colecciones=db.getCollectionNames();


for (i=0 ; i< colecciones.length ; i++) {
  comando="db."+colecciones[i]+".count()";
  salida = eval(comando);
  if (salida==0){
    comando2 = "db."+colecciones[i]+".drop()";
    eval(comando2);
  }
 }
