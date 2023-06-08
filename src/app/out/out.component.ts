import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutVisualComponent } from '../out-visual/out-visual.component';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  standalone: true,
  styleUrls: ['./out.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OutVisualComponent,
    NgIf,
  ],
})
export class OutComponent {
  @Input() viewOnly = false;
  name = new FormControl('', { nonNullable: true });
}
