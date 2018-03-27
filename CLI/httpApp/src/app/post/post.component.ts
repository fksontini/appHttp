import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component
({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
tabPosts;
  constructor(http:Http) 
    {
      http.get("https://jsonplaceholder.typicode.com/posts").subscribe(resp=>
      {
      console.log(resp.json())
      this.tabPosts=resp.json();
     });
   }

}
