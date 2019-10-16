import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordsOrderChangeService {

  constructor() { }

  /**
   * Recibe un array con un par de numeros y cambia la posición de sus valores.
   * Se usa para cambiar el orden de las coordenadas que entrega el GeoJson.
   * @param coords Array [valor1, valor2]
   * @returns Array [valor2, valor1]
   */
  getLatLng(coords){
    let coor:[number, number] = [coords[1], coords[0]];
    return coor;
  }

  /**
   * Recibe un array de arrays con pares de coordenadas [ [a,b], [c,d], ...] y devuelve
   * el mismo array con los pares cambiados de orden.
   * Se usa para cambiar el orden de las coordenadas que entrega el GeoJson.
   * @param coords:[[number1, number2]]
   * @return array [[number2, number1]]
   */
  getPolygon(coords){
    let poly = [];
    coords.forEach(coord=>{
      let newCoord = [coord[1], coord[0]];
      poly.push(newCoord);
    });

    return poly;
  }
}
