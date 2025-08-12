import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-network-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network-page.html',
  styleUrl: './network-page.css'
})
export class NetworkPage {
  users: any[] = [];

  loadUsers() {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => this.users = data);
  }
}
