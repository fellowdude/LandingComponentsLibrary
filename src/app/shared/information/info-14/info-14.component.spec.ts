import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info14Component } from './info-14.component';

describe('Info14Component', () => {
  let component: Info14Component;
  let fixture: ComponentFixture<Info14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info14Component]
    });
    fixture = TestBed.createComponent(Info14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
