import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDnaComponent } from './our-dna.component';

describe('OurDnaComponent', () => {
  let component: OurDnaComponent;
  let fixture: ComponentFixture<OurDnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurDnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
