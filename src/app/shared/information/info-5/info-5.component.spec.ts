import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info5Component } from './info-5.component';

describe('Info5Component', () => {
  let component: Info5Component;
  let fixture: ComponentFixture<Info5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info5Component]
    });
    fixture = TestBed.createComponent(Info5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
