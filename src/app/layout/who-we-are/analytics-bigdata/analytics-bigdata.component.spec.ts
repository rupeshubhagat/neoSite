import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsBigdataComponent } from './analytics-bigdata.component';

describe('AnalyticsBigdataComponent', () => {
  let component: AnalyticsBigdataComponent;
  let fixture: ComponentFixture<AnalyticsBigdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsBigdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsBigdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
