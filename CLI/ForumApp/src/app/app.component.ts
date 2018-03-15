import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sujets=[{
    titre:"Forum Angular",
  
  },
  {
    titre:"Forum Communication Serveur"
  },
  {
    titre:"Forum test Serveur"
  },]
}
