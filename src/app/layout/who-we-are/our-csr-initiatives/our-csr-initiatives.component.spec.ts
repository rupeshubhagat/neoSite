import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCsrInitiativesComponent } from './our-csr-initiatives.component';

describe('OurCsrInitiativesComponent', () => {
  let component: OurCsrInitiativesComponent;
  let fixture: ComponentFixture<OurCsrInitiativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCsrInitiativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCsrInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
