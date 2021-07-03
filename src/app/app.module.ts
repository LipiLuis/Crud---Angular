import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component'
import { HomeComponent  } from './Home/home.component'
import { CadastroUsuarioComponent   } from './usuario/cadastro/cadastro.usuario.component'
import { FormsModule } from '@angular/forms';
import { empresaService } from './Service/empresaServices';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { funcoesServices } from './Service/funcoesServices';
import { empregadoServices } from './Service/empregadoServices';
import { UsuarioSevico } from './Service/UsuarioService';
import { principalUsuarioComponent } from './usuario/cadastro/Principal/principal.usuario.component';
import { permissoesUsuarioComponent } from './usuario/cadastro/Permissoes/permissoes.usuario.component';
import { localizarUsuarioComponent } from './usuario/cadastro/Localizar/localizar.usuario.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    principalUsuarioComponent,
    permissoesUsuarioComponent,
    localizarUsuarioComponent,
    CadastroUsuarioComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'novo-usuario', component: CadastroUsuarioComponent },
    ])
  ],
  
  providers: [UsuarioSevico,empresaService,funcoesServices, empregadoServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
