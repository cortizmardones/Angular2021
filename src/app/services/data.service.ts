import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "../clientes/cliente";

@Injectable()
export class dataService {

  constructor(public http:HttpClient){
    console.log("Inicializando servicio .... ");
  };

  private apiKey :string = 'S1j29NbVWrICZXT0SSU56b1qrpRhGdkY';

  public listaClientes : Cliente [] = [
    {id: 1 , nombre : 'Carlos' , apellido : 'Ortiz' , email : 'cortizmardones@gmail.com' , createAt : '1988-03-22' , comuna : 'Puente Alto'},
    {id: 2 , nombre : 'Esteban' , apellido : 'Bustos' , email : 'ebustos@gmail.com' , createAt : '1988-03-22', comuna : 'Cerrillos'},
    {id: 3 , nombre : 'Marcelo' , apellido : 'Salas' , email : 'fsalas@gmail.com' , createAt : '1993-12-09', comuna : 'Santiago'},
    {id: 4 , nombre : 'Francisco' , apellido : 'Cancino' , email : 'fcancino@gmail.com' , createAt : '1985-04-03', comuna : 'La Florida'},
    {id: 5 , nombre : 'Jose' , apellido : 'Bernales' , email : 'jbernales@gmail.com' , createAt : '2017-12-11', comuna : 'La Cisterna'},
    {id: 6 , nombre : 'Ricardo' , apellido : 'Soto' , email : 'rsoto@gmail.com' , createAt : '1993-11-03', comuna : 'El Bosque'},
    {id: 7 , nombre : 'Claudio' , apellido : 'Sandoval' , email : 'csandoval@gmail.com' , createAt : '1990-08-29', comuna : 'Cerro Navia'},
    {id: 8 , nombre : 'Gonzalo' , apellido : 'Fernandez' , email : 'gfernandez@gmail.com' , createAt : '1985-06-02', comuna : 'La Granja'},
    {id: 9 , nombre : 'Elias' , apellido : 'Sanchez' , email : 'esanchez@gmail.com' , createAt : '1993-04-15', comuna : 'Maipú'}
  ];

  public comunas : string[] = ['Cerrillos', 'Cerro Navia', 'Conchalí', 'El Bosque', 'Estación Central', 'Huechuraba', 'Independencia', 'La Cisterna', 'La Florida', 'La Granja','La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipú', 'Ñuñoa', 'Pedro Aguirre Cerda', 'Peñalolén', 'Providencia', 'Pudahuel', 'Puente Alto', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Bernardo', 'San Joaquín', 'San Miguel', 'San Ramón', 'Santiago' , 'Vitacura'];
  public nombre : string = '';
  public apellido : string = '';
  public email : string = '';
  public serverMail : string = '';
  public createAt : string = '';
  public comuna : string = '';
  public posicion : number = 0;

  agregarUsuario(cliente : Cliente){
    this.listaClientes.push(cliente);
  }

  editarUsuario(position : number , cliente : Cliente){
    this.listaClientes[position] = cliente;
  }

  eliminarUsuario(position : number){
      this.listaClientes.splice(position,1);
  }

  requestHttp(){
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=S1j29NbVWrICZXT0SSU56b1qrpRhGdkY&q=angular&limit=25')
    .subscribe( (respuesta:any) =>{
      console.log(respuesta.data[0]);
    });
  }

  requestHttpSpringBoot(){
    this.http.get('http://localhost:8080/api/listarClientes')
    .subscribe( (respuesta:any) =>{
      console.log(respuesta);
    });
  }

}
