
import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { business } from "src/app/model/business";

@Injectable({
    providedIn: "root"
  })

export class empresaService implements OnInit{

    private readonly URI= "http://localhost:3004/api/empresa";
    
    private company: business[];

    ngOnInit(): void {
        this.company = [];
      }
      get headers(): HttpHeaders {
        return  new HttpHeaders().set('content-type', 'application/json',);
      }
  constructor(private http: HttpClient) {
  }
    public GetAllCompany(): Observable<business[]> {

        return this.http.get<business[]>(this.URI)
    }


}