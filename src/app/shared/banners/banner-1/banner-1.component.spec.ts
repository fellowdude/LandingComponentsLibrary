import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner1Component } from './banner-1.component';

describe('Banner1Component', () => {
  let component: Banner1Component;
  let fixture: ComponentFixture<Banner1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Banner1Component]
    });
    fixture = TestBed.createComponent(Banner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
