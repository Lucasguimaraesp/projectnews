import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListagemComponent } from './posts-listagem/posts-listagem.component';
import { HttpClientModule } from '@angular/common/http';
import { NovaNoticiaComponent } from './nova-noticia/nova-noticia.component'


@NgModule({
  declarations: [
    AppComponent,
    PostsListagemComponent,
    NovaNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
