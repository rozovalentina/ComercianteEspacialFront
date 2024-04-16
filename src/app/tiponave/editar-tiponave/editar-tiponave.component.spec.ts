import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTiponaveComponent } from './editar-tiponave.component';

describe('EditarTiponaveComponent', () => {
  let component: EditarTiponaveComponent;
  let fixture: ComponentFixture<EditarTiponaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTiponaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarTiponaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
