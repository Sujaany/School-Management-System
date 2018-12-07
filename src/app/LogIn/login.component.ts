import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(abc){
    console.log(abc);
    if(abc.uname=="admin" && abc.psw=="123"){
      this.router.navigate(["/manageAdmission"]);
    }else  if(abc.uname=="teacher" && abc.psw=="123"){
      this.router.navigate(["/registerStudent"]);
    }else  if(abc.uname=="student" && abc.psw=="123"){
      this.router.navigate(["/viewProfile"]);
    }
  }

}
