import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosConfirmacionComponent } from './usuarios-confirmacion.component';

describe('UsuariosConfirmacionComponent', () => {
  let component: UsuariosConfirmacionComponent;
  let fixture: ComponentFixture<UsuariosConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosConfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
