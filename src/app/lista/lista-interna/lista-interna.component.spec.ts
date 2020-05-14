import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInternaComponent } from './lista-interna.component';

describe('ListaInternaComponent', () => {
  let component: ListaInternaComponent;
  let fixture: ComponentFixture<ListaInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
