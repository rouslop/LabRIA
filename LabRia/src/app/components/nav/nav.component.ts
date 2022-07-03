import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Login} from '../../models/login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  token = localStorage.getItem('token');
  constructor( private api:LoginService ,private router:Router ) { }

  ngOnInit(): void {
  }
  
   logout(){
      localStorage.clear();
      this.token = localStorage.getItem('token');
      console.log(this.token);
    }
    
    public login(x:Login) {
      this.api.Login(x).subscribe(data => {
        console.log(data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('token_expiration', data.expiration);
        location.reload();
      });
      this.router.navigate(['/']);
    }

}
