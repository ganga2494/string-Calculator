import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  numbers = '';
  result: number | null = null;
  error: string | null = null;
  constructor(private calculatorService: UserService) {}

  async calculate() {
    this.result = null;
    this.error = null;
    try {
      this.result = await this.calculatorService.add(this.numbers);
    } catch (err:any) {
      console.log(err)
      this.error =err.response?.data?.error
    }
  }
}
