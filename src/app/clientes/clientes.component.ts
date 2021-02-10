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
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons';

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
  faWindowClose = faWindowClose;
  faHandSparkles = faHandSparkles;

  //Arreglo para llenar con los datos la tabla
  public Clientes : Cliente [] = [
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

  //Arreglo para llenar las comunas del select.
  public comunas : string[] = ['Cerrillos', 'Cerro Navia', 'Conchalí', 'El Bosque', 'Estación Central', 'Huechuraba', 'Independencia', 'La Cisterna', 'La Florida', 'La Granja','La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipú', 'Ñuñoa', 'Pedro Aguirre Cerda', 'Peñalolén', 'Providencia', 'Pudahuel', 'Puente Alto', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Joaquín', 'San Miguel', 'San Ramón', 'Santiago' , 'Vitacura'];

  //Propiedades y objetos para agregar usuarios nuevos.
  public divAdd: boolean = false;
  public nombre : string = '';
  public apellido : string = '';
  public email : string = '';
  public serverMail : string = '';
  public createAt : string = '';
  public comuna : string = '';
  //public objetoCliente : Cliente = {id:0,nombre:'',apellido:'',email:'',createAt:'',comuna:''};
  public posicion : number = 0;

  //Campos para las interaciones de la tabla
  public tabla: boolean = true;
  public textoBoton: string ="Ocultar Tabla";
  public tituloTabla: string = "Listado de clientes";

  //Campo para las interacciones de la seccion editar
  public divEdit: boolean = false;

  //Propiedades para las alertas/validaciones del formulario.
  public divFormALert : boolean = false;
  public divFormSuccess : boolean = false;
  public divDeleteUser : boolean = false;
  public divUpdateUser : boolean = false;

  //METODOS PERSONALIZADOS.

  //Funciones para la interactividad
  ocultarTabla() : void {
    this.tabla = (this.tabla==true) ? false : true;
    this.textoBoton = (this.tabla==true) ? "Ocultar Tabla" : "Mostrar Tabla";
    this.tituloTabla = (this.tabla==true) ? "Listado de clientes" : "Tabla vacía";
  }

  //metodos para agregar usuarios
  agregarUsuarioBtn() : void {
    this.divAdd = true;
    this.divEdit = false;
    this.divFormSuccess = false;
    this.divDeleteUser = false;
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
      this.divFormALert = true;
    }else if(nuevoCliente.apellido.length == 0){
      console.log("No se pudo agregar usuario , el campo apellido esta vacio");
      this.divFormALert = true;
    }else if(nuevoCliente.email.length == 0){
      console.log("No se pudo agregar usuario , el campo email esta vacio");
      this.divFormALert = true;
    }else if(this.serverMail.length == 0){
      console.log("No se pudo agregar usuario , el campo email esta vacio");
      this.divFormALert = true;
    }else if(nuevoCliente.createAt.length == 0){
      console.log("No se pudo agregar usuario , el campo fecha de nacimiento esta vacio");
      this.divFormALert = true;
    }else if(nuevoCliente.comuna.length == 0){
      console.log("No se pudo agregar usuario , el campo comuna esta vacio");
      this.divFormALert = true;
    }else{
      //Si pasa todas las validaciones agregamos el objeto nuevo en el fondo del array.
      this.Clientes.push(nuevoCliente);
      this.divFormALert = false;
      this.divFormSuccess = true;
      //Limpiar los input luego de utilizarlos - solo despues de que se hayan agregado al arreglo , no antes ya que aun necesitamos los datos en los input del formulario
      this.nombre='';
      this.apellido='';
      this.email='';
      this.serverMail ='';
      this.createAt='';
      this.comuna='';
      //Ocultar el formulario
      this.divAdd = false;
    }
  }

  //Metodo para cancelar el guardado y ocultar el formulario y las alertas.
  cancelarGuardado(){
    this.divAdd = false;
    this.divEdit = false;
    this.divFormSuccess = false;
    this.divFormALert = false;
  }











  //Metodos para editar usuarios.
  editar( nombre: string , apellido : string , email : string , createAt : string , comuna : string , position : number) : void {
    console.log("Editando a : " + nombre + " " + apellido);
    this.divEdit = true;
    this.divAdd = false;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.createAt = createAt;
    this.comuna = comuna;
    this.posicion = position;
  }

  modificarUsuario() : void {
    console.log("LLegamos al metodo modificarUsuario() con los valores");
    let nuevoCliente = new Cliente();
    nuevoCliente.nombre = this.nombre;
    nuevoCliente.apellido = this.apellido;
    nuevoCliente.email = this.email;
    nuevoCliente.createAt = this.createAt;
    nuevoCliente.comuna = this.comuna;
    //Esta linea actualiza dentro del arreglo el nuevo objeto con los nuevos datos.
    this.Clientes[this.posicion] = nuevoCliente;
    //Despues de que se agrega el item hay que ocultar el formulario
    this.divEdit = false;
    //Muestro la confirmación de actualización.
    this.divUpdateUser = true;
  }


  cancelarActualizacion(){
    this.divAdd = false;
    this.divEdit = false;
    this.divFormSuccess = false;
    this.divFormALert = false;
    this.divUpdateUser = false;
  }
















  //Metodos para eliminar usuarios.
  eliminar( position: number) : void {
    this.Clientes.splice( position , 1 );
    this.divDeleteUser = true;
    this.divAdd = false;
    this.divEdit = false;
    this.divFormSuccess = false;
    this.divFormALert = false;
  }

  //Metodo para limpiar limpiarAlertas
  limpiarAlertas() : void{
    console.log("Limpiando alertas..");
    this.divAdd = false;
    this.divEdit = false;
    this.divFormSuccess = false;
    this.divFormALert = false;
    this.divDeleteUser = false;
    this.divFormSuccess = false;
    this.divUpdateUser = false;
  }



}
