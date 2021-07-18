import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanceItemComponent } from './chance-item.component';

describe('ChanceItemComponent', () => {
  let component: ChanceItemComponent;
  let fixture: ComponentFixture<ChanceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChanceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
