import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadycutComponent } from './readycut.component';

describe('ReadycutComponent', () => {
  let component: ReadycutComponent;
  let fixture: ComponentFixture<ReadycutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadycutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadycutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
