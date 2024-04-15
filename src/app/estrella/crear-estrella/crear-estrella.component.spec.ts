import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstrellaComponent } from './crear-estrella.component';

describe('CrearEstrellaComponent', () => {
  let component: CrearEstrellaComponent;
  let fixture: ComponentFixture<CrearEstrellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearEstrellaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearEstrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
