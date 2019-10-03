** Como agregar un loteo a la base de datos **

-Entrar a http://geojson.io.
-buscar la ubicación del loteo y colocar un marcador en el centro del loteo.
-Exportar el archivo como GeoJson.
-El archivo obtenido es un objeto con elementos que no se utilizan.
-modificar el archivo geojson eliminando los corchetes, el primer elemento y la clave del segundo:
	{"type":"FeatureCollection","features":
 el resultado debe ser un array con un objeto adentro, cuyo primer item es "type": "Feature"
-Guardar el archivo cambiando la extensión de .geojson a .json
-Importar el .json a la coleccion loteos de la base de datos.

 