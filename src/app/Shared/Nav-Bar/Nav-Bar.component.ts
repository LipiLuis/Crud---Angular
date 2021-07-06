import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { permissoesUsuarioComponent } from 'src/app/usuario/cadastro/Permissoes/permissoes.usuario.component';
import { principalUsuarioComponent } from 'src/app/usuario/cadastro/Principal/principal.usuario.component';

@Component({
  selector: 'app-Nav-Bar',
  templateUrl: './Nav-Bar.component.html',
  styleUrls: ['./Nav-Bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public Tabs: NavbarModel[] = [];
  public TabActive: NavbarModel;

  @Input() usuario;
  
  constructor() {}
  addItem(value: Usuario) {
    this.usuario = value;
    console.log(value)
  }
  ngOnInit() {
    const tab1 = new NavbarModel();
    const tab2 = new NavbarModel();
    const tab3 = new NavbarModel();

    tab1.setItem(1, "Principal", true, principalUsuarioComponent);
    tab2.setItem(2, "Permissões", false, permissoesUsuarioComponent);
    tab3.setItem(3, "Localizar", false, principalUsuarioComponent);

    this.Tabs.push(tab1, tab2, tab3);
  }
}

export class NavbarModel {
  public Id: number;
  public Text: string;
  public Active: boolean;
  public Componente: any;

  constructor() {}

  public setItem(id: number, text: string, active: boolean, componente: any) {
    this.Id = id;
    this.Text = text;
    this.Active = active;
    this.Componente = componente;
  }
}