import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosinteresComponent } from './datosinteres.component';

describe('DatosinteresComponent', () => {
  let component: DatosinteresComponent;
  let fixture: ComponentFixture<DatosinteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosinteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosinteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
