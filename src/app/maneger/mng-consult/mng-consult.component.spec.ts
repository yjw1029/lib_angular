import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngConsultComponent } from './mng-consult.component';

describe('MngConsultComponent', () => {
  let component: MngConsultComponent;
  let fixture: ComponentFixture<MngConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
