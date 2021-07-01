
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { business } from "src/app/model/business";
import { Employee } from "src/app/model/Employee";
import { funcoes } from "src/app/model/funcoes";
import { Usuario } from "src/app/model/Usuario";
import { UsuarioSevico } from "src/app/Service/UsuarioService";

@Component({

    selector: "localizar-usuario",
    templateUrl: "./localizar.usuario.component.html"
})

export class localizarUsuarioComponent{

    public users: Usuario[];

    constructor(private _usuarioService: UsuarioSevico){
    }
    ngOnInit() {
        this._usuarioService.GetAllUser().subscribe(
            user => {
                this.users = user;
            }
        )
        }
    
    GetUser(usuarioSelect: Usuario ){      

        // this.usuario = usuarioSelect;
        document.getElementById("nav-localizar").classList.remove("active");
        document.getElementById("nav-localizar-tab").classList.remove("active");

        document.getElementById("nav-principal").classList.add("active");
        document.getElementById("nav-principal").classList.add("show");
        document.getElementById("nav-principal-tab").classList.add("active");

        console.log(usuarioSelect)
      }

}  