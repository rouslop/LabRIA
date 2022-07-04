import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaDocumentosComponent } from './alta-documentos.component';

describe('AltaDocumentosComponent', () => {
  let component: AltaDocumentosComponent;
  let fixture: ComponentFixture<AltaDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
