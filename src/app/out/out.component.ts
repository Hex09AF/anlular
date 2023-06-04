import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutVisualComponent } from '../out-visual/out-visual.component';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  standalone: true,
  styleUrls: ['./out.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OutVisualComponent],
})
export class OutComponent {
  name = new FormControl('', { nonNullable: true });
}
