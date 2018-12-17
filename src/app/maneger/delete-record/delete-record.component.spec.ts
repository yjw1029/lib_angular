import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecordComponent } from './delete-record.component';

describe('DeleteRecordComponent', () => {
  let component: DeleteRecordComponent;
  let fixture: ComponentFixture<DeleteRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
