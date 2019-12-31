import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryserveComponent } from './industryserve.component';

describe('IndustryserveComponent', () => {
  let component: IndustryserveComponent;
  let fixture: ComponentFixture<IndustryserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
