import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutVisualComponent } from './out-visual.component';

describe('OutVisualComponent', () => {
  let component: OutVisualComponent;
  let fixture: ComponentFixture<OutVisualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutVisualComponent]
    });
    fixture = TestBed.createComponent(OutVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
