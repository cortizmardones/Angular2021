import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent  {

  Clientes: Cliente [] = [
    {id: 1 , nombre : 'Esteban' , apellido : 'Bustos' , email : 'ebustos@gmail.com' , createAt : '1991-07-24'},
    {id: 2 , nombre : 'Carlos' , apellido : 'Ortiz' , email : 'cortizmardones@gmail.com' , createAt : '1988-03-22'},
    {id: 3 , nombre : 'Marcelo' , apellido : 'Veloso' , email : 'mveloso@gmail.com' , createAt : '1993-12-09'},
    {id: 4 , nombre : 'Francisco' , apellido : 'Cancino' , email : 'fcancino@gmail.com' , createAt : '1985-04-03'},
    {id: 5 , nombre : 'Jose' , apellido : 'bernales' , email : 'jbernales@gmail.com' , createAt : '2017-12-11'}
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

