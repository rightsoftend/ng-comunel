import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-group-inputs',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './group-inputs.component.html',
  styleUrl: './group-inputs.component.scss'
})
export class GroupInputsComponent {
  groupControls = {
    label: "Телефон:"
  }
}
