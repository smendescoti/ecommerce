import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';

import { AppRoutingModule } from './app.routing';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { TotalCarrinhoComprasComponent } from './total-carrinho-compras/total-carrinho-compras.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { LoginComponent } from './login/login.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CarrinhoComprasComponent,
    TotalCarrinhoComprasComponent,
    CadastroClientesComponent,
    FinalizarPedidoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
