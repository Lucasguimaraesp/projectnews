import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListagemComponent } from './posts-listagem.component';

describe('PostsListagemComponent', () => {
  let component: PostsListagemComponent;
  let fixture: ComponentFixture<PostsListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
