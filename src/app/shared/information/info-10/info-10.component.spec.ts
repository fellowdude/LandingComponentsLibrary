import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info10Component } from './info-10.component';

describe('Info10Component', () => {
  let component: Info10Component;
  let fixture: ComponentFixture<Info10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info10Component]
    });
    fixture = TestBed.createComponent(Info10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
