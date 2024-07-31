import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButtonComponent } from '../components/my-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'effective-frontend-testing';
}
