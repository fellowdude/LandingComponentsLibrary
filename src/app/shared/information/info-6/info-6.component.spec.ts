import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info6Component } from './info-6.component';

describe('Info6Component', () => {
  let component: Info6Component;
  let fixture: ComponentFixture<Info6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info6Component]
    });
    fixture = TestBed.createComponent(Info6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
