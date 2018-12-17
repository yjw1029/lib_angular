import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendedBooksComponent } from './lended-books.component';

describe('LendedBooksComponent', () => {
  let component: LendedBooksComponent;
  let fixture: ComponentFixture<LendedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
