import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDetailDirectoriesComponent } from './shared-detail-directories.component';

describe('SharedDetailDirectoriesComponent', () => {
  let component: SharedDetailDirectoriesComponent;
  let fixture: ComponentFixture<SharedDetailDirectoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedDetailDirectoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDetailDirectoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
