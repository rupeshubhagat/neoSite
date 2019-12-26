import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulljsComponent } from './fulljs.component';

describe('FulljsComponent', () => {
  let component: FulljsComponent;
  let fixture: ComponentFixture<FulljsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulljsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulljsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
