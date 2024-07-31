import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'my-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
  public color: string = 'blue';

  public onClick() {
    this.color = 'red';
  }
}
