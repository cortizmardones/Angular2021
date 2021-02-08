import { Component } from '@angular/core';
import { Cliente } from './cliente';

//Icono libreria FontAwesome
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent  {

  //Juego de iconos fontawesome para llenar la tabla del componente
  faAddressBook = faAddressBook;
  faMailBulk = faMailBulk;
  faCalendarAlt = faCalendarAlt;
  faCity = faCity ;

  Clientes: Cliente [] = [
    {id: 1 , nombre : 'Esteban' , apellido : 'Bustos' , email : 'ebustos@gmail.com' , createAt : '1991-07-24' , comuna : 'San Bernardo'},
    {id: 2 , nombre : 'Carlos' , apellido : 'Ortiz' , email : 'cortizmardones@gmail.com' , createAt : '1988-03-22', comuna : 'Puente Alto'},
    {id: 3 , nombre : 'Marcelo' , apellido : 'Veloso' , email : 'mveloso@gmail.com' , createAt : '1993-12-09', comuna : 'Santiago'},
    {id: 4 , nombre : 'Francisco' , apellido : 'Cancino' , email : 'fcancino@gmail.com' , createAt : '1985-04-03', comuna : 'Puente Alto'},
    {id: 5 , nombre : 'Jose' , apellido : 'bernales' , email : 'jbernales@gmail.com' , createAt : '2017-12-11', comuna : 'Coñaripe'},
    {id: 6 , nombre : 'Ricardo' , apellido : 'Soto' , email : 'rsoto@gmail.com' , createAt : '1993-11-03', comuna : 'Colina 2'}
  ];

  public tabla: boolean = true;
  public textoBoton: string ="Ocultar Tabla";
  public tituloTabla: string = "Listado de clientes";

  ocultarTabla() : void {
    this.tabla = (this.tabla==true) ? false : true;
    this.textoBoton = (this.tabla==true) ? "Ocultar Tabla" : "Mostrar Tabla";
    this.tituloTabla = (this.tabla==true) ? "Listado de clientes" : "Tabla vacía";
  }

}
