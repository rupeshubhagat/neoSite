import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireATeamComponent } from './hire-a-team.component';

describe('HireATeamComponent', () => {
  let component: HireATeamComponent;
  let fixture: ComponentFixture<HireATeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireATeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireATeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
