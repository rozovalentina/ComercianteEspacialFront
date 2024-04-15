import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrellaDetalleComponent } from './estrella-detalle.component';

describe('EstrellaDetalleComponent', () => {
  let component: EstrellaDetalleComponent;
  let fixture: ComponentFixture<EstrellaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstrellaDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstrellaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
