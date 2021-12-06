import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaNoticiaComponent } from './nova-noticia/nova-noticia.component';
import { PostsListagemComponent } from './posts-listagem/posts-listagem.component';

const routes: Routes = [
  
  { path: '', component: PostsListagemComponent },
  { path: 'nova', component: NovaNoticiaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
