import { Injectable } from "@angular/core";
import { Cliente } from "../clientes/cliente";


@Injectable()
export class dataService {

  constructor(){
    console.log("Inicializando servicio .... ");
  };

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

  agregarUsuario(cliente : Cliente){
    console.log("Agregando usuario del servicio...");
    this.listaClientes.push(cliente);
  }

  editarUsuario(){
    console.log("Editando usuario del servicio...");
  }

  eliminarUsuario(){
      console.log("Eliminando usuario del servicio ....");
  }

}
