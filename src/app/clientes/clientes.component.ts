import { Component } from '@angular/core';
import { Cliente } from './cliente';

//Icono libreria FontAwesome
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent  {

  //Juego de iconos fontawesome para llenar la tabla del componente
  faClipboardList = faClipboardList;
  faAddressBook = faAddressBook;
  faMailBulk = faMailBulk;
  faCalendarAlt = faCalendarAlt;
  faCity = faCity ;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faUserPlus = faUserPlus;

  //Arreglo para llenar con los datos la tabla
  public Clientes : Cliente [] = [
    {id: 1 , nombre : 'Esteban' , apellido : 'Bustos' , email : 'ebustos@gmail.com' , createAt : '1991-07-24' , comuna : 'San Bernardo'},
    {id: 2 , nombre : 'Carlos' , apellido : 'Ortiz' , email : 'cortizmardones@gmail.com' , createAt : '1988-03-22', comuna : 'Puente Alto'},
    {id: 3 , nombre : 'Marcelo' , apellido : 'Veloso' , email : 'mveloso@gmail.com' , createAt : '1993-12-09', comuna : 'Santiago'},
    {id: 4 , nombre : 'Francisco' , apellido : 'Cancino' , email : 'fcancino@gmail.com' , createAt : '1985-04-03', comuna : 'Puente Alto'},
    {id: 5 , nombre : 'Jose' , apellido : 'bernales' , email : 'jbernales@gmail.com' , createAt : '2017-12-11', comuna : 'Coñaripe'},
    {id: 6 , nombre : 'Ricardo' , apellido : 'Soto' , email : 'rsoto@gmail.com' , createAt : '1993-11-03', comuna : 'Colina 2'},
    {id: 7 , nombre : 'Elias' , apellido : 'Sanchez' , email : 'esanchez@gmail.com' , createAt : '1993-04-15', comuna : 'Maipú'}
  ];

  //Objeto vacio para agregarlo al editar
  public objetoCliente : Cliente = {id:50,nombre:'',apellido:'',email:'',createAt:'',comuna:''};

  //Campos para las interaciones de la tabla
  public tabla: boolean = true;
  public textoBoton: string ="Ocultar Tabla";
  public tituloTabla: string = "Listado de clientes";

  //Campo para las interacciones de la seccion editar
  public divEdit: boolean = false;
  public nombre : string = '';
  public apellido : string = '';
  public email : string = '';
  public createAt : string = '';
  public comuna : string = '';

  //Funciones para la interactividad
  ocultarTabla() : void {
    this.tabla = (this.tabla==true) ? false : true;
    this.textoBoton = (this.tabla==true) ? "Ocultar Tabla" : "Mostrar Tabla";
    this.tituloTabla = (this.tabla==true) ? "Listado de clientes" : "Tabla vacía";
  }

  editar( nombre: string , apellido : string , email : string , createAt : string , comuna : string) : void {
    console.log("Editando a : " + nombre + " " + apellido);
    this.divEdit = true;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.createAt = createAt;
    this.comuna = comuna;
  }

  guardarCambiosEditar(nombre: string , apellido : string , email : string , createAt : string , comuna : string) : void {
    console.log("Guardando cambios");
    this.objetoCliente.nombre = nombre;
    this.objetoCliente.apellido = apellido;
    this.objetoCliente.email = email;
    this.objetoCliente.createAt = createAt;
    this.objetoCliente.comuna = comuna;
    this.Clientes.push(this.objetoCliente);
    //Despues de que se agrega el item hay que ocultar el formulario
    this.divEdit = false;
  }

  eliminar( position: number) : void {
    console.log("Eliminar...");
    this.Clientes.splice( position , 1 );
  }



}
