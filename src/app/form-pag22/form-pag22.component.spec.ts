import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPag22Component } from './form-pag22.component';

describe('FormPag22Component', () => {
  let component: FormPag22Component;
  let fixture: ComponentFixture<FormPag22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPag22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPag22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
