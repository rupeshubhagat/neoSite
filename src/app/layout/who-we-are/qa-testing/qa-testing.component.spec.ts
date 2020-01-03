import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTestingComponent } from './qa-testing.component';

describe('QaTestingComponent', () => {
  let component: QaTestingComponent;
  let fixture: ComponentFixture<QaTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
