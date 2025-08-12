import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-page.html',
  styleUrl: './file-page.css'
})
export class FilePage {
  uploaded = false;
  file: File | null = null;

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    if (this.file) {
      // Simulate upload
      setTimeout(() => this.uploaded = true, 500);
    }
  }
}
