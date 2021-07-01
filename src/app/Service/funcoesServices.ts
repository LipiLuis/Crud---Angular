
import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { funcoes } from "../model/funcoes";


@Injectable({
    providedIn: "root"
  })

export class funcoesServices implements OnInit{

    private readonly URI= "http://localhost:3004/api/Fucoes";
    
    private functions: funcoes[];

    ngOnInit(): void {
        this.functions = [];
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