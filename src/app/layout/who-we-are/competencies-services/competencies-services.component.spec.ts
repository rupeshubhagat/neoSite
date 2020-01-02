import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciesServicesComponent } from './competencies-services.component';

describe('CompetenciesServicesComponent', () => {
  let component: CompetenciesServicesComponent;
  let fixture: ComponentFixture<CompetenciesServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciesServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
