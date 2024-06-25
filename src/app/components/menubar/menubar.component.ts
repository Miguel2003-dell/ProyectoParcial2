import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  constructor(private authService: AuthService, private router: Router) {}

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}