import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionanimationComponent } from './sectionanimation.component';

describe('SectionanimationComponent', () => {
  let component: SectionanimationComponent;
  let fixture: ComponentFixture<SectionanimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionanimationComponent]
    });
    fixture = TestBed.createComponent(SectionanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
