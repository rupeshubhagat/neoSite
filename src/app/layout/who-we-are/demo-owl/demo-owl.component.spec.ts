import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOwlComponent } from './demo-owl.component';

describe('DemoOwlComponent', () => {
  let component: DemoOwlComponent;
  let fixture: ComponentFixture<DemoOwlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoOwlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
