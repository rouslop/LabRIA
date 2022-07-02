import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaUnidadesComponent } from './alta-unidades.component';

describe('AltaUnidadesComponent', () => {
  let component: AltaUnidadesComponent;
  let fixture: ComponentFixture<AltaUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaUnidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
