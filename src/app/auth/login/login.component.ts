import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });

  constructor(private router: Router, private fb: FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
  }
  login(){
    if (this.loginForm.invalid) {
      Swal.fire('Error', 'Incorrect email or password', 'error');
      return;
    }
    this.router.navigateByUrl('dashboard');
  }

}
