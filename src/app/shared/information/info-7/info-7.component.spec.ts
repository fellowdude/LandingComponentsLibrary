import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info7Component } from './info-7.component';

describe('Info7Component', () => {
  let component: Info7Component;
  let fixture: ComponentFixture<Info7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info7Component]
    });
    fixture = TestBed.createComponent(Info7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
