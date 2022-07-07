import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OplaboralesComponent } from './oplaborales.component';

describe('OplaboralesComponent', () => {
  let component: OplaboralesComponent;
  let fixture: ComponentFixture<OplaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OplaboralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OplaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
