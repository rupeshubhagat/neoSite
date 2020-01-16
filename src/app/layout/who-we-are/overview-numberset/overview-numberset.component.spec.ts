import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewNumbersetComponent } from './overview-numberset.component';

describe('OverviewNumbersetComponent', () => {
  let component: OverviewNumbersetComponent;
  let fixture: ComponentFixture<OverviewNumbersetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewNumbersetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewNumbersetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
