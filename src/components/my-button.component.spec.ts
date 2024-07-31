import { TestBed } from "@angular/core/testing";
import { MyButtonComponent } from "./my-button.component";

describe('MyButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyButtonComponent],
    }).compileComponents();
  });

  // This test only partially covers the unit of behaviour and focuses too much on the implementation
  // Resulting in a brittle test that easily breaks and misses to check we correctly setup the html template
  // In this case the test pass but the behaviour is not working as expected
  it('Should change color when clicked - Weak Test', () => {
    const fixture = TestBed.createComponent(MyButtonComponent);
    const myButton = fixture.componentInstance;

    myButton.onClick();

    expect(myButton.color).toBe('red');
  })

  // This test failes as a demonstration that the behaviour is not properly implemented
  it('Should change color when clicked - Proper Test', () => {
    const fixture = TestBed.createComponent(MyButtonComponent);
    const button = fixture.nativeElement.querySelector('[data-testid="my-btn"');

    button.click();

    fixture.detectChanges();

    expect(button.style.backgroundColor).toBe('red');
  })
})
