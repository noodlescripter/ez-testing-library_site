import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypressComponent } from './cypress.component';

describe('CypressComponent', () => {
  let component: CypressComponent;
  let fixture: ComponentFixture<CypressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CypressComponent]
    });
    fixture = TestBed.createComponent(CypressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
