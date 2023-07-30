import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InComponent } from './in.component';

describe('InComponent', () => {
  let component: InComponent;
  let fixture: ComponentFixture<InComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InComponent]
    });
    fixture = TestBed.createComponent(InComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
