import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  testdata = "hello from parent"
  
  constructor(){     
  }

  getdata(e){
    console.log(e);
    
  }

}
