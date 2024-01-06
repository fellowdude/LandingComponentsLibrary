import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info15Component } from './info-15.component';

describe('Info15Component', () => {
  let component: Info15Component;
  let fixture: ComponentFixture<Info15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info15Component]
    });
    fixture = TestBed.createComponent(Info15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
