
import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { funcoes } from "../model/funcoes";


@Injectable({
    providedIn: "root"
  })

export class funcoesServices implements OnInit{

    private readonly URI= "http://localhost:3004/api/Fucoes";
    
    private func: funcoes;
    private funcs: funcoes[];

    ngOnInit(): void {
      }
      get headers(): HttpHeaders {
        return  new HttpHeaders().set('content-type', 'application/json',);
      }
  constructor(private http: HttpClient) {
  }
    public GetAllFunctions(): Observable<funcoes[]> {

        return this.http.get<funcoes[]>(this.URI)
    }
    
}