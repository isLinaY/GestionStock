import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List_eComponent } from './list-e.component';

describe('List_eComponent', () => {
  let component: List_eComponent;
  let fixture: ComponentFixture<List_eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List_eComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List_eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
