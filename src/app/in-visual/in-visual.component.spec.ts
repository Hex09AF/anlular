import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InVisualComponent } from './in-visual.component';

describe('InVisualComponent', () => {
  let component: InVisualComponent;
  let fixture: ComponentFixture<InVisualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InVisualComponent]
    });
    fixture = TestBed.createComponent(InVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
