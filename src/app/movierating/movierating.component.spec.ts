import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieratingComponent } from './movierating.component';

describe('MovieratingComponent', () => {
  let component: MovieratingComponent;
  let fixture: ComponentFixture<MovieratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
