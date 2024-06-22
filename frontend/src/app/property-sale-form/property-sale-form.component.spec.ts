import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySaleFormComponent } from './property-sale-form.component';

describe('PropertySaleFormComponent', () => {
  let component: PropertySaleFormComponent;
  let fixture: ComponentFixture<PropertySaleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertySaleFormComponent]
    });
    fixture = TestBed.createComponent(PropertySaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
