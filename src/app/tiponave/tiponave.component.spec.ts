import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiponaveComponent } from './tiponave.component';

describe('TiponaveComponent', () => {
  let component: TiponaveComponent;
  let fixture: ComponentFixture<TiponaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiponaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiponaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
