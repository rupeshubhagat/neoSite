import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreaboutneosoftComponent } from './moreaboutneosoft.component';

describe('MoreaboutneosoftComponent', () => {
  let component: MoreaboutneosoftComponent;
  let fixture: ComponentFixture<MoreaboutneosoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreaboutneosoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreaboutneosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
