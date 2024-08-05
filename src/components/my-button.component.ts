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
  public showAdditionalText: boolean = false;
  public text: string = 'Click Me!';

  public onClick() {
    this.showAdditionalText = !this.showAdditionalText;
    this.text = this.showAdditionalText ? 'Close Me!' : 'Click Me!';
  }
}
