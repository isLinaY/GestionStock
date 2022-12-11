import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List_hComponent } from './list-h.component';

describe('List_hComponent', () => {
  let component: List_hComponent;
  let fixture: ComponentFixture<List_hComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List_hComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List_hComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
