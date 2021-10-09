import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlugerTitlesComponent } from './bluger-titles.component';

describe('BlugerTitlesComponent', () => {
  let component: BlugerTitlesComponent;
  let fixture: ComponentFixture<BlugerTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlugerTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlugerTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
