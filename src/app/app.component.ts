import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './core/shared/components/toolbar/toolbar.component';
import { InputFormComponent } from './core/shared/components/ref-books/companies/input-form/input-form.component';
import { TableListComponent } from './core/shared/components/ref-books/companies/table-list/table-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, InputFormComponent, TableListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Comunel';
}
