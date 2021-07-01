import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { business } from "src/app/model/business";
import { Employee } from "src/app/model/Employee";
import { funcoes } from "src/app/model/funcoes";
import { Usuario } from "src/app/model/Usuario";
import { empregadoServices } from "src/app/Service/empregadoServices";
import { empresaService } from "src/app/Service/empresaServices";
import { funcoesServices } from "src/app/Service/funcoesServices";

import { UsuarioSevico } from "src/app/Service/UsuarioService";
import { localizarUsuarioComponent } from "./Localizar/localizar.usuario.component";
import { permissoesUsuarioComponent } from "./Permissoes/permissoes.usuario.component";
import { principalUsuarioComponent } from "./Principal/principal.usuario.component";


@Component({

    selector: "cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html"
})
 export class CadastroUsuarioComponent {
  
    public usuario: Usuario;
    ngOnInit(): void {
      this.usuario = new Usuario();
    }
    constructor() {
           
    }

    NavSearch(){
      document.getElementById("nav-principal").classList.remove("active");
      document.getElementById("nav-principal-tab").classList.remove("active");

      document.getElementById("nav-localizar").classList.add("active");
      document.getElementById("nav-localizar").classList.add("show");
      document.getElementById("nav-localizar-tab").classList.add("active");
    }
  }