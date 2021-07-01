
import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../model/Usuario";



@Injectable({
  providedIn: "root",
})
export class UsuarioSevico {

    private readonly URI= "http://localhost:3004/";
    
    private users: Usuario[];

    ngOnInit(): void {
        this.users = [];
      }
      get headers(): HttpHeaders {
        return  new HttpHeaders().set('content-type', 'application/json',);
      }
  constructor(private http: HttpClient) {
  }
    public GetAllUser(): Observable<Usuario[]> {

        return this.http.get<Usuario[]>(this.URI + "api/Usuarios")
    }
    public Post(usuario: Usuario) : Observable<Usuario>{
      return this.http.post<Usuario>(this.URI + "api/Usuario:", JSON.stringify(usuario), {headers: this.headers});
    }


}