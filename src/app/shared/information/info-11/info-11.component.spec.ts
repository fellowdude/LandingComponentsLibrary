import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info11Component } from './info-11.component';

describe('Info11Component', () => {
  let component: Info11Component;
  let fixture: ComponentFixture<Info11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info11Component]
    });
    fixture = TestBed.createComponent(Info11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
