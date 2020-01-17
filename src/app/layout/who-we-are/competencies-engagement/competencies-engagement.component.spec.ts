import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciesEngagementComponent } from './competencies-engagement.component';

describe('CompetenciesEngagementComponent', () => {
  let component: CompetenciesEngagementComponent;
  let fixture: ComponentFixture<CompetenciesEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciesEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciesEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
