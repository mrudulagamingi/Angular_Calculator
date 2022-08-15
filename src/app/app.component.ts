import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  constructor(private postService:PostService){}
  ngOnInit()
  {
    this.postService.getPost('INR','USD','5').subscribe((result: any)=>{
   console.log("result",result)
   this.data=result
    })
  }
}


