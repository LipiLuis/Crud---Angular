
import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "src/app/model/Employee";




@Injectable({
    providedIn: "root"
  })

export class empregadoServices implements OnInit{

    private readonly URI= "http://localhost:3004/api/empregado";
    
    private job: Employee[];

    ngOnInit(): void {
        this.job = [];
      }
      get headers(): HttpHeaders {
        return  new HttpHeaders().set('content-type', 'application/json',);
      }
  constructor(private http: HttpClient) {
  }
    public GetAllJob(): Observable<Employee[]> {

        return this.http.get<Employee[]>(this.URI)
    }


}