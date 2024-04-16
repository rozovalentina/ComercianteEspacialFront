import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiponaveDetalleComponent } from './tiponave-detalle.component';

describe('TiponaveDetalleComponent', () => {
  let component: TiponaveDetalleComponent;
  let fixture: ComponentFixture<TiponaveDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiponaveDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiponaveDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
