import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenioComponent } from './duenio.component';

describe('DuenioComponent', () => {
  let component: DuenioComponent;
  let fixture: ComponentFixture<DuenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuenioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
