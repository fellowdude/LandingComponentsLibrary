import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info1Component } from './info-1.component';

describe('Info1Component', () => {
  let component: Info1Component;
  let fixture: ComponentFixture<Info1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info1Component]
    });
    fixture = TestBed.createComponent(Info1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
