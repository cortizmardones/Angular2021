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
import { dataService } from '../services/data.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent  {

  //Probando la inyección de dependencia.
  constructor(public nombreServicio: dataService){
  }

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

  //Así me evito tener que tener los arreglos y las listas en el componente.
  public Clientes : Cliente[] = this.nombreServicio.listaClientes;
  public comunas : string[] =  this.nombreServicio.comunas;
  public listaClientesSpringBoot : Cliente[] = this.nombreServicio.listaClientesSpringBoot;
  public nombre : string = this.nombreServicio.nombre;
  public apellido : string = this.nombreServicio.apellido;
  public email : string = this.nombreServicio.email;
  public serverMail : string = this.nombreServicio.serverMail;
  public createAt : string = this.nombreServicio.createAt;
  public comuna : string = this.nombreServicio.comuna;
  public posicion : number = this.nombreServicio.posicion;

  //Alertas y formularios.
  public divFormularioAgregarUsuario: boolean = false;
  public divFormularioEditarUsuario: boolean = false;
  public alertFaltanCamposFormulario : boolean = false;
  public alertUsuarioAgregado : boolean = false;
  public alertUsuarioEliminado : boolean = false;
  public alertUsuarioModificado : boolean = false;
  public tabla: boolean = true;
  public textoBoton: string ="Ocultar Tabla";
  public tituloTabla: string = "Listado de clientes";
  public tablaSpringBoot : boolean = false;



  // ############## INICIO METODOS DE LIMPIEZA Y CANCELACIÓN #####################
  //Funciones para la interactividad
  ocultarTabla() : void {
    this.tabla = (this.tabla==true) ? false : true;
    this.textoBoton = (this.tabla==true) ? "Ocultar Tabla" : "Mostrar Tabla";
    this.tituloTabla = (this.tabla==true) ? "Listado de clientes" : "Tabla vacía";
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
    // ############## FIN METODOS DE LIMPIEZA Y CANCELACIÓN #####################










  // ############## INICIO METODOS PARA AGREGAR #####################

  agregarUsuarioBtn() : void {
    this.divFormularioAgregarUsuario = true;
    this.divFormularioEditarUsuario = false;
    this.alertUsuarioAgregado = false;
    this.alertUsuarioEliminado = false;
    //VOLVER TODAS LAS VARIABLES VACIAS POR SI TENIA ALGUNA CON LA INFORMACION DEL EDITAR (EVITA QUE SE QUEDE LA INFO EN LOS INPUT DEL FORMULARIO)
     this.nombre = '';
     this.apellido = '';
     this.email = '';
     this.serverMail = '';
     this.createAt = '';
     this.comuna = '';
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
    if(nuevoCliente.nombre.trim().length == 0 ){
      //console.log("No se pudo agregar usuario , el campo nombre esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (nuevoCliente.apellido.trim().length == 0){
      //console.log("No se pudo agregar usuario , el campo apellido esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (nuevoCliente.email.trim().length == 0){
      //console.log("No se pudo agregar usuario , el campo email esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (this.serverMail.trim().length == 0){
      //console.log("No se pudo agregar usuario , el campo email esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (nuevoCliente.createAt.trim().length == 0){
      //console.log("No se pudo agregar usuario , el campo fecha de nacimiento esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else if (nuevoCliente.comuna.trim().length == 0){
      //console.log("No se pudo agregar usuario , el campo comuna esta vacio");
      this.alertFaltanCamposFormulario = true;
    } else {
      //Si pasa todas las validaciones agregamos el objeto nuevo en el fondo del array.
      //this.Clientes.push(nuevoCliente);
      this.nombreServicio.agregarUsuario(nuevoCliente);

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
    this.alertUsuarioEliminado = false;
    this.alertUsuarioModificado = false;
    this.alertFaltanCamposFormulario = false;
  }

  // ############## FIN METODOS DE LIMPIEZA Y CANCELACIÓN #####################





// ############## INICIO METODOS DE EDICIÓN #####################

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
    this.nombreServicio.editarUsuario(this.posicion, nuevoCliente);
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

// ############## FIN METODOS DE EDICIÓN #####################














// ############## INICIO METODOS DE ELIMINACIÓN #####################

  eliminar( position: number) : void {
    this.nombreServicio.eliminarUsuario(position);

    this.divFormularioAgregarUsuario = false;
    this.divFormularioEditarUsuario = false;
    this.alertUsuarioEliminado = true;
    this.alertUsuarioAgregado = false;
    this.alertUsuarioModificado = false;
    this.alertFaltanCamposFormulario = false;
  }

// ############## FIN METODOS DE ELIMINACIÓN #####################










// ############## INICIO METODOS DE HTTP REQUEST #####################
requestHttp(){
  this.nombreServicio.requestHttpSpringBoot();
//Se muestra la tabla
  this.tablaSpringBoot = true;
}
// ############## FIN METODOS DE HTTP REQUEST #####################




}
