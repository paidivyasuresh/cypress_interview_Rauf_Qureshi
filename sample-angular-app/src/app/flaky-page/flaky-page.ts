import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flaky-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './flaky-page.html',
  styleUrl: './flaky-page.css'
})
export class FlakyPage implements OnInit {
  showButton = false;
  username = '';
  password = '';
  loginSuccess = false;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    // Random delay between 1 and 3 seconds
    const delay = 1000 + Math.random() * 2000;
    setTimeout(() => {
      this.zone.run(() => {
        this.showButton = true;
      });
    }, delay);
  }

  onLogin() {
    if (this.username === 'admin' && this.password === 'password') {
      this.loginSuccess = true;
    } else {
      this.loginSuccess = false;
    }
  }
}
