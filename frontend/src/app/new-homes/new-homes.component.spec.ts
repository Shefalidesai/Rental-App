import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHomesComponent } from './new-homes.component';

describe('NewHomesComponent', () => {
  let component: NewHomesComponent;
  let fixture: ComponentFixture<NewHomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHomesComponent]
    });
    fixture = TestBed.createComponent(NewHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
