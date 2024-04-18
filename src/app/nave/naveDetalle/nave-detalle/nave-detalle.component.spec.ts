import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveDetalleComponent } from './nave-detalle.component';

describe('NaveDetalleComponent', () => {
  let component: NaveDetalleComponent;
  let fixture: ComponentFixture<NaveDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaveDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaveDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
