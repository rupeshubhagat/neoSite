import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAugmentationComponent } from './team-augmentation.component';

describe('TeamAugmentationComponent', () => {
  let component: TeamAugmentationComponent;
  let fixture: ComponentFixture<TeamAugmentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAugmentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAugmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
