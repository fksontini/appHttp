import { Component } from '@angular/core';
import { sujet } from './models/sujet';
import { message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sujets=[
    new sujet("Forum Angular",
            [
              new message("Jamel","Message de test 1"),
              new message("Firas KSONTINI","Message de test 1")
            ],

)];
}
