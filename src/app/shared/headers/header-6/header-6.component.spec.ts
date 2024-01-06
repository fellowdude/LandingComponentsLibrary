import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header6Component } from './header-6.component';

describe('Header6Component', () => {
  let component: Header6Component;
  let fixture: ComponentFixture<Header6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Header6Component]
    });
    fixture = TestBed.createComponent(Header6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
