import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner6Component } from './banner-6.component';

describe('Banner6Component', () => {
  let component: Banner6Component;
  let fixture: ComponentFixture<Banner6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Banner6Component]
    });
    fixture = TestBed.createComponent(Banner6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
