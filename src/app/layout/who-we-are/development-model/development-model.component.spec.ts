import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentModelComponent } from './development-model.component';

describe('DevelopmentModelComponent', () => {
  let component: DevelopmentModelComponent;
  let fixture: ComponentFixture<DevelopmentModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
