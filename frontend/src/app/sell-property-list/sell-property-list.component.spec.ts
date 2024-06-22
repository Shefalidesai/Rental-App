import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPropertyListComponent } from './sell-property-list.component';

describe('SellPropertyListComponent', () => {
  let component: SellPropertyListComponent;
  let fixture: ComponentFixture<SellPropertyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellPropertyListComponent]
    });
    fixture = TestBed.createComponent(SellPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
