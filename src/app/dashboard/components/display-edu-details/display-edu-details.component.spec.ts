import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEduDetailsComponent } from './display-edu-details.component';

describe('DisplayEduDetailsComponent', () => {
  let component: DisplayEduDetailsComponent;
  let fixture: ComponentFixture<DisplayEduDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEduDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEduDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
