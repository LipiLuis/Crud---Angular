
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { business } from "src/app/model/business";
import { Employee } from "src/app/model/Employee";
import { funcoes } from "src/app/model/funcoes";
import { Usuario } from "src/app/model/Usuario";
import { funcoesServices } from "src/app/Service/funcoesServices";
import { UsuarioSevico } from "src/app/Service/UsuarioService";

@Component({

    selector: "localizar-usuario",
    templateUrl: "./localizar.usuario.component.html"
})

export class localizarUsuarioComponent{
    @Output() newItem = new EventEmitter<Usuario>();
    @Input() usuario;
    public users: Usuario[];
    public Functions: funcoes;

    constructor(private _usuarioService: UsuarioSevico, private _functionService: funcoesServices){
        
        }
    ngOnInit() {
        this.Functions = new  funcoes();
        this._usuarioService.GetAllUser().subscribe(
            user => {
                this.users = user;
            }
        )
        this.GetByFuncId(1);
    }

    public GetByFuncId(codigo: number): funcoes {
        this._functionService.GetAllFunctions().subscribe(
            funcs => {
                this.Functions = funcs.find(f => f.codigo == codigo);    
            }
        )
        console.log(this.Functions)
        return this.Functions;
    }
    GetUser(usuarioSelect: Usuario ){      
        this.newItem.emit(usuarioSelect);
        // this.usuario = usuarioSelect;
        document.getElementById("nav-localizar").classList.remove("active");
        document.getElementById("nav-localizar-tab").classList.remove("active");

        document.getElementById("nav-principal").classList.add("active");
        document.getElementById("nav-principal").classList.add("show");
        document.getElementById("nav-principal-tab").classList.add("active");

        console.log(usuarioSelect)
      }

}  