import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDigitalTransformationComponent } from './enterprise-digital-transformation.component';

describe('EnterpriseDigitalTransformationComponent', () => {
  let component: EnterpriseDigitalTransformationComponent;
  let fixture: ComponentFixture<EnterpriseDigitalTransformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseDigitalTransformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseDigitalTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
