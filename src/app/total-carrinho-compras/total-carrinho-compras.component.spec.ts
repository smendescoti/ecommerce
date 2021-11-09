import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCarrinhoComprasComponent } from './total-carrinho-compras.component';

describe('TotalCarrinhoComprasComponent', () => {
  let component: TotalCarrinhoComprasComponent;
  let fixture: ComponentFixture<TotalCarrinhoComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCarrinhoComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCarrinhoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
