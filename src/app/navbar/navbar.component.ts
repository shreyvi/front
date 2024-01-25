import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

  export class NavbarComponent {
    constructor(private router: Router) { }
  
    profile() {
      this.router.navigate(['/profile']);
    }
    home() {
      this.router.navigate(['/home']);
    }

    addUser(){
      this.router.navigate(['/add']);
    }
  }
