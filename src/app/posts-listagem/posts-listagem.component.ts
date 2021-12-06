import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts-listagem',
  templateUrl: './posts-listagem.component.html',
  styleUrls: ['./posts-listagem.component.css']
})
export class PostsListagemComponent implements OnInit {
  
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts: any;

  constructor(private http:HttpClient){ }

  getPosts(){
    this.posts = this.http.get(this.ROOT_URL + '/posts')

  }

  ngOnInit(){
    this.getPosts();
    
  }

}
