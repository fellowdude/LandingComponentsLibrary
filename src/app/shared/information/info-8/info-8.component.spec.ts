import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info8Component } from './info-8.component';

describe('Info8Component', () => {
  let component: Info8Component;
  let fixture: ComponentFixture<Info8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info8Component]
    });
    fixture = TestBed.createComponent(Info8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
