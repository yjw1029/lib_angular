import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangInfoComponent } from './chang-info.component';

describe('ChangInfoComponent', () => {
  let component: ChangInfoComponent;
  let fixture: ComponentFixture<ChangInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
