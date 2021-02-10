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
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
  faPlusSquare = faPlusSquare;
  faEyeSlash = faEyeSlash;

  //Arreglo para llenar con los datos la tabla
  public Clientes : Cliente [] = [
    {id: 1 , nombre : 'Esteban' , apellido : 'Bustos' , email : 'ebustos@gmail.com' , createAt : '1991-07-24' , comuna : 'San Bernardo'},
    {id: 2 , nombre : 'Carlos' , apellido : 'Ortiz' , email : 'cortizmardones@gmail.com' , createAt : '1988-03-22', comuna : 'Puente Alto'},
    {id: 3 , nombre : 'Marcelo' , apellido : 'Veloso' , email : 'mveloso@gmail.com' , createAt : '1993-12-09', comuna : 'Santiago'},
    {id: 4 , nombre : 'Francisco' , apellido : 'Cancino' , email : 'fcancino@gmail.com' , createAt : '1985-04-03', comuna : 'Puente Alto'},
    {id: 5 , nombre : 'Jose' , apellido : 'Bernales' , email : 'jbernales@gmail.com' , createAt : '2017-12-11', comuna : 'Coñaripe'},
    {id: 6 , nombre : 'Ricardo' , apellido : 'Soto' , email : 'rsoto@gmail.com' , createAt : '1993-11-03', comuna : 'Colina 2'},
    {id: 7 , nombre : 'Camilo' , apellido : 'Calbuqoy' , email : 'ccalbuqoy@gmail.com' , createAt : '1993-11-03', comuna : 'Peñaflor'},
    {id: 8 , nombre : 'Patricio' , apellido : 'Estrella' , email : 'pestrella@gmail.com' , createAt : '1990-08-29', comuna : 'Fondo de Bikini'},
    {id: 9 , nombre : 'Gonzalo' , apellido : 'Fernandez' , email : 'gfernandez@gmail.com' , createAt : '1985-06-02', comuna : 'Buin'},
    {id: 10 , nombre : 'Elias' , apellido : 'Sanchez' , email : 'esanchez@gmail.com' , createAt : '1993-04-15', comuna : 'Maipú'}
  ];

  //Propiedades y objetos para agregar usuarios nuevos.
  public divAdd: boolean = false;
  public nombre : string = '';
  public apellido : string = '';
  public email : string = '';
  public serverMail : string = '';
  public createAt : string = '';
  public comuna : string = '';
  public objetoCliente : Cliente = {id:0,nombre:'',apellido:'',email:'',createAt:'',comuna:''};

  //Campos para las interaciones de la tabla
  public tabla: boolean = true;
  public textoBoton: string ="Ocultar Tabla";
  public tituloTabla: string = "Listado de clientes";

  //Campo para las interacciones de la seccion editar
  public divEdit: boolean = false;

  //Funciones para la interactividad
  ocultarTabla() : void {
    this.tabla = (this.tabla==true) ? false : true;
    this.textoBoton = (this.tabla==true) ? "Ocultar Tabla" : "Mostrar Tabla";
    this.tituloTabla = (this.tabla==true) ? "Listado de clientes" : "Tabla vacía";
  }

  //Opciónes para agregar Usuarios nuevos
  agregarUsuarioBtn() : void {
    this.divAdd = true;
    this.divEdit = false;
  }

  agregarUsuario() : void {
    //Cada vez que entramos a este metodo debemos volver a crear un NUEVO objeto para que no me los sobreescriba en la tabla.
    let nuevoCliente = new Cliente();
    nuevoCliente.nombre = this.nombre;
    nuevoCliente.apellido = this.apellido;
    nuevoCliente.email = this.email+"@"+this.serverMail;
    nuevoCliente.createAt = this.createAt;
    nuevoCliente.comuna = this.comuna;

    //Valudación cavernicola de campos vacios.
    if(nuevoCliente.nombre.length == 0 ){
      console.log("No se pudo agregar usuario , el campo nombre esta vacio");
    }else if(nuevoCliente.apellido.length == 0){
      console.log("No se pudo agregar usuario , el campo apellido esta vacio");
    }else if(nuevoCliente.email.length == 0){
      console.log("No se pudo agregar usuario , el campo email esta vacio");
    }else if(nuevoCliente.createAt.length == 0){
      console.log("No se pudo agregar usuario , el campo fecha de nacimiento esta vacio");
    }else if(nuevoCliente.comuna.length == 0){
      console.log("No se pudo agregar usuario , el campo comuna esta vacio");
    }else{
      //Si pasa todas las validaciones agregamos el objeto nuevo en el fondo del array.
      this.Clientes.push(nuevoCliente);
    }

    //Limpiar los input luego de utilizarlos
    this.nombre='';
    this.apellido='';
    this.email='';
    this.createAt='';
    this.comuna='';
    //Ocultar el formulario
    this.divAdd = false;
  }


  //Opcion eliminar
  eliminar( position: number) : void {
    console.log("Eliminar...");
    this.Clientes.splice( position , 1 );
  }




















  //Opcion de editar
  editar( nombre: string , apellido : string , email : string , createAt : string , comuna : string) : void {
    console.log("Editando a : " + nombre + " " + apellido);
    this.divEdit = true;
    this.divAdd = false;
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



}
