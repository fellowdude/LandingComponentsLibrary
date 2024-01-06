import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info12Component } from './info-12.component';

describe('Info12Component', () => {
  let component: Info12Component;
  let fixture: ComponentFixture<Info12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Info12Component]
    });
    fixture = TestBed.createComponent(Info12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
