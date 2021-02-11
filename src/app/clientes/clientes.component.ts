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

  //Alertas y formularios.
  public divFormularioAgregarUsuario: boolean = false;
  public divFormularioEditarUsuario: boolean = false;
  public alertFaltanCamposFormulario : boolean = false;
  public alertUsuarioAgregado : boolean = false;
  public alertUsuarioEliminado : boolean = false;
  public alertUsuarioModificado : boolean = false;


  public nombre : string = '';
  public apellido : string = '';
  public email : string = '';
  public serverMail : string = '';
  public createAt : string = '';
  public comuna : string = '';
  public posicion : number = 0;

  //Campos para las interaciones de la tabla
  public tabla: boolean = true;
  public textoBoton: string ="Ocultar Tabla";
  public tituloTabla: string = "Listado de clientes";






  //METODOS PERSONALIZADOS.

  //Funciones para la interactividad
  ocultarTabla() : void {
    this.tabla = (this.tabla==true) ? false : true;
    this.textoBoton = (this.tabla==true) ? "Ocultar Tabla" : "Mostrar Tabla";
    this.tituloTabla = (this.tabla==true) ? "Listado de clientes" : "Tabla vacía";
  }

  //metodos para agregar usuarios
  agregarUsuarioBtn() : void {
    this.divFormularioAgregarUsuario = true;
    this.divFormularioEditarUsuario = false;
    this.alertUsuarioAgregado = false;
    this.alertUsuarioEliminado = false;
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
      //console.log("No se pudo agregar usuario , el campo nombre esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (nuevoCliente.apellido.length == 0){
      //console.log("No se pudo agregar usuario , el campo apellido esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (nuevoCliente.email.length == 0){
      //console.log("No se pudo agregar usuario , el campo email esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (this.serverMail.length == 0){
      //console.log("No se pudo agregar usuario , el campo email esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (nuevoCliente.createAt.length == 0){
      //console.log("No se pudo agregar usuario , el campo fecha de nacimiento esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (nuevoCliente.comuna.length == 0){
      //console.log("No se pudo agregar usuario , el campo comuna esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else {
      //Si pasa todas las validaciones agregamos el objeto nuevo en el fondo del array.
      this.Clientes.push(nuevoCliente);
      this.alertFaltanCamposFormulario = false;
      this.alertUsuarioAgregado = true;
      //Limpiar los input luego de utilizarlos - solo despues de que se hayan agregado al arreglo , no antes ya que aun necesitamos los datos en los input del formulario
      this.nombre='';
      this.apellido='';
      this.email='';
      this.serverMail ='';
      this.createAt='';
      this.comuna='';
      //Ocultar el formulario
      this.divFormularioAgregarUsuario = false;
    }
  }

  //Metodo para cancelar el guardado y ocultar el formulario y las alertas.
  cancelarGuardado(){
    this.divFormularioAgregarUsuario = false;
    this.divFormularioEditarUsuario = false;
    this.alertUsuarioAgregado = false;
    this.alertFaltanCamposFormulario = false;
  }











  //Metodos para editar usuarios.
  editar( nombre: string , apellido : string , email : string , createAt : string , comuna : string , position : number) : void {
    this.divFormularioEditarUsuario = true;
    this.divFormularioAgregarUsuario = false;
    this.alertUsuarioAgregado = false;
    this.alertUsuarioEliminado = false;
    this.alertUsuarioModificado = false;
    this.nombre = nombre;
    this.apellido = apellido;
    //La funcion indexof me permite obtener la posicion dodne est ubicado el @
    //La funcion slice me permite extraer una cadena a parir de otra, recibe 2 parametros (inicio , termino)
    this.email = email.slice(0,email.indexOf("@"));
    this.serverMail = email.slice((email.indexOf("@")+1),email.length);
    this.createAt = createAt;
    this.comuna = comuna;
    this.posicion = position;
  }

  modificarUsuario() : void {
    let nuevoCliente = new Cliente();
    nuevoCliente.nombre = this.nombre;
    nuevoCliente.apellido = this.apellido;
    nuevoCliente.email = this.email +'@'+ this.serverMail;
    nuevoCliente.createAt = this.createAt;
    nuevoCliente.comuna = this.comuna;
    //Esta linea actualiza dentro del arreglo el nuevo objeto con los nuevos datos.
    this.Clientes[this.posicion] = nuevoCliente;
    //Despues de que se agrega el item hay que ocultar el formulario
    this.divFormularioEditarUsuario = false;
    //Muestro la confirmación de actualización.
    this.alertUsuarioModificado = true;
  }


  cancelarActualizacion(){
    this.divFormularioAgregarUsuario = false;
    this.divFormularioEditarUsuario = false;
    this.alertUsuarioAgregado = false;
    this.alertFaltanCamposFormulario = false;
    this.alertUsuarioModificado = false;
  }
















  //Metodos para eliminar usuarios.
  eliminar( position: number) : void {
    this.Clientes.splice( position , 1 );
    this.divFormularioAgregarUsuario = false;
    this.divFormularioEditarUsuario = false;

    this.alertUsuarioEliminado = true;
    this.alertUsuarioAgregado = false;
    this.alertUsuarioModificado = false;
    this.alertFaltanCamposFormulario = false;

  }

  //Metodo para limpiar limpiarAlertas
  limpiarAlertas() : void{
    this.divFormularioAgregarUsuario = false;
    this.divFormularioEditarUsuario = false;

    this.alertFaltanCamposFormulario = false;
    this.alertUsuarioEliminado = false;
    this.alertUsuarioAgregado = false;
    this.alertUsuarioModificado = false;
  }



}
