import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateUserComponent } from './addupdate-user.component';

describe('AddupdateUserComponent', () => {
  let component: AddupdateUserComponent;
  let fixture: ComponentFixture<AddupdateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddupdateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
