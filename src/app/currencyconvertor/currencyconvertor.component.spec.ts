import { ComponentFixture, TestBed } from '@angular/core/testing';

import { currencyconvertorComponent } from './currencyconvertor.component';

describe('currencyconvertorComponent', () => {
  let component: currencyconvertorComponent;
  let fixture: ComponentFixture<currencyconvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ currencyconvertorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(currencyconvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
