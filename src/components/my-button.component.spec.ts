import { TestBed } from "@angular/core/testing";
import { MyButtonComponent } from "./my-button.component";

describe('MyButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyButtonComponent],
    }).compileComponents();
  });


  // This test failes as a demonstration that the behaviour is not properly implemented
  // See how I'm not interacting with the internal properties of the component
  it('Should show the text block when clicked - Proper Test', () => {
    const fixture = TestBed.createComponent(MyButtonComponent);
    const button = fixture.nativeElement.querySelector('[data-testid="my-btn"');

    button.click();
    fixture.detectChanges();

    const additionalTextBlock = fixture.nativeElement.querySelector('[data-testid="my-btn.additional-text-block"');

    expect(additionalTextBlock).toBeTruthy()
  })

  it('Should change the text to Close Me! when clicked', () => {
    const fixture = TestBed.createComponent(MyButtonComponent);
    const button = fixture.nativeElement.querySelector('[data-testid="my-btn"');

    button.click();
    fixture.detectChanges();

    expect(button.textContent.trim()).toBe('Close Me!');
  })
})
