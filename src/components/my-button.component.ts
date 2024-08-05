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
  public showTextBlock: boolean = false;
  public text: string = 'Click Me!';

  public onClick() {
    this.showTextBlock = !this.showTextBlock;
    this.text = this.showTextBlock ? 'Close Me!' : 'Click Me!';
  }
}
