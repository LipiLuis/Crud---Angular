
import { Component, OnInit } from "@angular/core";
import { business } from "src/app/model/business";
import { Employee } from "src/app/model/Employee";
import { funcoes } from "src/app/model/funcoes";
import { Usuario } from "src/app/model/Usuario";
import { empregadoServices } from "src/app/Service/empregadoServices";
import { empresaService } from "src/app/Service/empresaServices";
import { funcoesServices } from "src/app/Service/funcoesServices";

@Component({

    selector: "principal-usuario",
    templateUrl: "./principal.usuario.component.html"
})

export class principalUsuarioComponent{
   public funcoes: funcoes[];
   public company: business[];
   public job: Employee[];
   public usuario: Usuario;
   public msgErro: string;
    constructor(private funcoesServices: funcoesServices, private empresaServices: empresaService, private empregadoService: empregadoServices ){

    }
    ngOnInit(){
        this.usuario = new Usuario();
        this.funcoesServices.GetAllFunctions().subscribe(
            functions => {
                this.funcoes = functions;
            },
            e => {
              console.log(e.error)
            }
          ),
    
          this.empresaServices.GetAllCompany()
          .subscribe(
            empresas =>{
                this.company = empresas
            },
            e => {
              console.log(e.error);
            }
          ),
          this.empregadoService.GetAllJob()
          .subscribe(
            jobs =>{
                this.job = jobs;

            },
            e => {
              console.log(e.error);
            }
          )  
    }
}

