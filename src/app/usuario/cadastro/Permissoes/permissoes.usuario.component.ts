
import { Component, Input, OnInit } from "@angular/core";
import { business } from "src/app/model/business";
import { Employee } from "src/app/model/Employee";
import { funcoes } from "src/app/model/funcoes";
import { Usuario } from "src/app/model/Usuario";

@Component({

    selector: "permissoes-usuario",
    templateUrl: "./permissoes.usuario.component.html"
})

export class permissoesUsuarioComponent{
    @Input() usuario;

    constructor(){

    }
    ngOnInit() {

    }
}