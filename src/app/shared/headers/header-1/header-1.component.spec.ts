import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header1Component } from './header-1.component';

describe('Header1Component', () => {
  let component: Header1Component;
  let fixture: ComponentFixture<Header1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Header1Component]
    });
    fixture = TestBed.createComponent(Header1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
