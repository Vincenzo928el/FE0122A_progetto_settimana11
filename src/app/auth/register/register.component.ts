import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    constructor(private authSrv: AuthService, private router:Router) {}

    ngOnInit(): void {}

    async login(form: NgForm) {
      try {
        await this.authSrv.register(form.value).toPromise();
        this.router.navigate(['/login'])
      } catch (error) {
        alert('error')
      }
    }
  }
