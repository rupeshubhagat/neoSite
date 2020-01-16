import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeosoftServicesComponent } from './neosoft-services.component';

describe('NeosoftServicesComponent', () => {
  let component: NeosoftServicesComponent;
  let fixture: ComponentFixture<NeosoftServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeosoftServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeosoftServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
