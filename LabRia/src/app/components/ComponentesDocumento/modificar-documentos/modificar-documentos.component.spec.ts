import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDocumentosComponent } from './modificar-documentos.component';

describe('ModificarDocumentosComponent', () => {
  let component: ModificarDocumentosComponent;
  let fixture: ComponentFixture<ModificarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
