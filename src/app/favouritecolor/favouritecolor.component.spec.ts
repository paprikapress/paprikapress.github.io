import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritecolorComponent } from './favouritecolor.component';

describe('FavoritecolorComponent', () => {
  let component: FavoritecolorComponent;
  let fixture: ComponentFixture<FavoritecolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritecolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
