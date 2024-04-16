import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTiponaveComponent } from './crear-tiponave.component';

describe('CrearTiponaveComponent', () => {
  let component: CrearTiponaveComponent;
  let fixture: ComponentFixture<CrearTiponaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearTiponaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearTiponaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
