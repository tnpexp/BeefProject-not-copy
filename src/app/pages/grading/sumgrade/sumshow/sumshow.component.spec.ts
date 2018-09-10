import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumshowComponent } from './sumshow.component';

describe('SumshowComponent', () => {
  let component: SumshowComponent;
  let fixture: ComponentFixture<SumshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
