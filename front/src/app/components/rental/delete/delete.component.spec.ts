import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDeleteComponent } from './delete.component';

describe('CarDeleteComponent', () => {
  let component: CarDeleteComponent;
  let fixture: ComponentFixture<CarDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
