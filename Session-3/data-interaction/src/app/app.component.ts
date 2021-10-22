import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-interaction';

  name:string="Sonam Soni"
  imgurl:string="./assets/images/pencil.jpg"

  w=150;
  h=150;
  text="Pencil";

  view=false;

  open(){
      this.view=!this.view;
      console.log("Check View values "+this.view)
  }

  username:string=""
}
