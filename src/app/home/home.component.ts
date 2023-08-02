import { Component } from '@angular/core';
import { InComponent } from '../in/in.component';
import { OutComponent } from '../out/out.component';
import { NgIf } from '@angular/common';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [InComponent, OutComponent, TotalComponent, NgIf],
})
export class HomeComponent {
  viewIncome = true;
  viewOutcome = true;

  toggleView(type: string) {
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
