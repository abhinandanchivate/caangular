import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExpDetailsComponent } from './display-exp-details.component';

describe('DisplayExpDetailsComponent', () => {
  let component: DisplayExpDetailsComponent;
  let fixture: ComponentFixture<DisplayExpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayExpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayExpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
