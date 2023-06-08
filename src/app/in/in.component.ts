import { Component, Input } from '@angular/core';
import { InVisualComponent } from '../in-visual/in-visual.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss'],
  standalone: true,
  imports: [InVisualComponent, NgIf],
})
export class InComponent {
  @Input() viewOnly = false;
}
