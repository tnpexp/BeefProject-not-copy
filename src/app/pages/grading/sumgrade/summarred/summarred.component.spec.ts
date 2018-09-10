import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarredComponent } from './summarred.component';

describe('SummarredComponent', () => {
  let component: SummarredComponent;
  let fixture: ComponentFixture<SummarredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
