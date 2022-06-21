import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMateriaComponent } from './modificar-materia.component';

describe('ModificarMateriaComponent', () => {
  let component: ModificarMateriaComponent;
  let fixture: ComponentFixture<ModificarMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
