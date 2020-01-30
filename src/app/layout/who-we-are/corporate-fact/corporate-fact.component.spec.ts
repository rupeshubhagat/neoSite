import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateFactComponent } from './corporate-fact.component';

describe('CorporateFactComponent', () => {
  let component: CorporateFactComponent;
  let fixture: ComponentFixture<CorporateFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
