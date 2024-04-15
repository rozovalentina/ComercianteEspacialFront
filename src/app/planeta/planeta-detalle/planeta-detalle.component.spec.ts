import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaDetalleComponent } from './planeta-detalle.component';

describe('PlanetaDetalleComponent', () => {
  let component: PlanetaDetalleComponent;
  let fixture: ComponentFixture<PlanetaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetaDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
