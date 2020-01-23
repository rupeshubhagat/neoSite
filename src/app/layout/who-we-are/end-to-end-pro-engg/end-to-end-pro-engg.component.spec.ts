import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndToEndProEnggComponent } from './end-to-end-pro-engg.component';

describe('EndToEndProEnggComponent', () => {
  let component: EndToEndProEnggComponent;
  let fixture: ComponentFixture<EndToEndProEnggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndToEndProEnggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndToEndProEnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
