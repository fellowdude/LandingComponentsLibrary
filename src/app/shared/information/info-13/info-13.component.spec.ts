import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info13Component } from './info-13.component';

describe('Info13Component', () => {
  let component: Info13Component;
  let fixture: ComponentFixture<Info13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info13Component]
    });
    fixture = TestBed.createComponent(Info13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
