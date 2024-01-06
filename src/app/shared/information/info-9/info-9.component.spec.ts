import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info9Component } from './info-9.component';

describe('Info9Component', () => {
  let component: Info9Component;
  let fixture: ComponentFixture<Info9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info9Component]
    });
    fixture = TestBed.createComponent(Info9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
