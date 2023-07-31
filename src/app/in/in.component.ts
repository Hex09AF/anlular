import { Component } from '@angular/core';
import { InVisualComponent } from '../in-visual/in-visual.component';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss'],
  standalone: true,
  imports: [InVisualComponent],
})
export class InComponent {}
