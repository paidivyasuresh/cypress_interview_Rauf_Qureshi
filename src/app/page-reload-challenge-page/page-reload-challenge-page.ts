import { Component } from '@angular/core';

@Component({
  selector: 'app-page-reload-challenge-page',
  templateUrl: './page-reload-challenge-page.html',
  styleUrls: ['./page-reload-challenge-page.css']
})
export class PageReloadChallengePage {
  randomNumber: number = this.getRandomNumber();

  reload() {
    this.randomNumber = this.getRandomNumber();
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}
