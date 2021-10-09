import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlugerCategoryComponent } from './bluger-category.component';

describe('BlugerCategoryComponent', () => {
  let component: BlugerCategoryComponent;
  let fixture: ComponentFixture<BlugerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlugerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlugerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
