import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlugerContentComponent } from './bluger-content.component';

describe('BlugerContentComponent', () => {
  let component: BlugerContentComponent;
  let fixture: ComponentFixture<BlugerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlugerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlugerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
