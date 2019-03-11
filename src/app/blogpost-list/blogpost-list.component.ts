import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.scss']
})
export class BlogpostListComponent implements OnInit {
  blogPostList$ : Observable<BlogPost[]>;
  constructor(private blogPostService : BlogpostService) { }

  ngOnInit() {
    this.blogPostList$ = this.blogPostService.getBlogPosts();
  }

}
