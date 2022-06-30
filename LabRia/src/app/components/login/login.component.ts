import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import {Login} from '../../models/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formlogin = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  constructor( private api:LoginService) { }

  ngOnInit(): void {
    // this.login();
  }

  login() {
    let x: Login={
      password: this.formlogin.controls["password"].value,
      username: this.formlogin.controls["username"].value
    }
    console.log(this.formlogin.value.username);
    this.api.Login(x).subscribe(data => {
      console.log(data);
    });
  }

}
