import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngIndexComponent } from './mng-index.component';

describe('MngIndexComponent', () => {
  let component: MngIndexComponent;
  let fixture: ComponentFixture<MngIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
