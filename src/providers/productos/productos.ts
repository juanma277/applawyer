import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS_PRODUCCION } from "../../config/url.servicios";

@Injectable()
export class ProductosProvider {

	pagina:number = 0;
	productos:any[] = [];
  lineas:any[] = [];
  porCategoria:any[] =[];

  resultados:any[] = [];

  constructor(public http: HttpClient) {
    this.cargarTodos();
    this.cargarLineas();
  }

  cargarLineas(){
    let url = URL_SERVICIOS_PRODUCCION + "lineas";
    this.http.get(url)
              .subscribe(data=>{

                if (data['error']) {
                  // ERROR
                }else{
                  this.lineas = data['lineas'];
                  console.log(this.lineas);
                }

              });
  }

  cargarPorCategoria(categoria:number){

    let url = URL_SERVICIOS_PRODUCCION + "productos/por_tipo/" + categoria;
    this.http.get(url).subscribe(data=>{

              if (data['error']) {
                  // ERROR
                }else{
                  this.porCategoria = data['Productos'];
                  console.log(this.porCategoria);
                }
      });

  }

  cargarTodos(){

    let promesa = new Promise ((resolve, reject)=>{


        let url = URL_SERVICIOS_PRODUCCION+ "productos/todos/" + this.pagina;
          this.http.get(url).subscribe(res =>{
            if(res['error']){
              //ERROR
            }else{

              let nuevaData = this.agrupar(res['Productos'],2);
              this.productos.push(...nuevaData);
              this.pagina = this.pagina + 1;
            }

            resolve();
          })

    });

    return promesa;

  	

  }

  buscarProducto(termino:string){

    let url = URL_SERVICIOS_PRODUCCION + "productos/buscar/" + termino;

    this.http.get(url)
              .subscribe(resp=>{

                let data = resp;

                this.resultados = data['Productos'];

              });

  }

  private agrupar(arr:any, tamano:number){

    let nuevoArreglo = [];

    for (let i = 0; i<arr.length;i+=tamano) {
      nuevoArreglo.push(arr.slice(i,i+tamano));
    }
    console.log(nuevoArreglo);
    return nuevoArreglo;
  }

}
