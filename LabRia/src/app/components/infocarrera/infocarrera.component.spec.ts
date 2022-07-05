import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocarreraComponent } from './infocarrera.component';

describe('InfocarreraComponent', () => {
  let component: InfocarreraComponent;
  let fixture: ComponentFixture<InfocarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
