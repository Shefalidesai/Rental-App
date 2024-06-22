import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilderComponent } from './silder.component';

describe('SilderComponent', () => {
  let component: SilderComponent;
  let fixture: ComponentFixture<SilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilderComponent]
    });
    fixture = TestBed.createComponent(SilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
