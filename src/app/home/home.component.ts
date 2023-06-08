import { Component } from '@angular/core';
import { InComponent } from '../in/in.component';
import { OutComponent } from '../out/out.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [InComponent, OutComponent, NgIf],
})
export class HomeComponent {
  viewIncome = false;
  viewOutcome = false;

  toggleView(type: string) {
    console.log(type);
    switch (type) {
      case 'INCOME':
        this.viewIncome = !this.viewIncome;
        return;
      case 'OUTCOME':
        this.viewOutcome = !this.viewOutcome;
        return;
      default:
        return;
    }
  }
}
