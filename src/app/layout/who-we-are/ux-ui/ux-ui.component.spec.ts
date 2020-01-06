import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxUiComponent } from './ux-ui.component';

describe('UxUiComponent', () => {
  let component: UxUiComponent;
  let fixture: ComponentFixture<UxUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
