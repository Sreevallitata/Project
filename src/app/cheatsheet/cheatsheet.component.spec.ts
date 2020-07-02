import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cheatsheetComponent } from './cheatsheet.component';

describe('cheatsheetComponent', () => {
  let component: cheatsheetComponent;
  let fixture: ComponentFixture<cheatsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cheatsheetComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cheatsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
