import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrRegistroComponent } from './dr-registro.component';

describe('DrRegistroComponent', () => {
  let component: DrRegistroComponent;
  let fixture: ComponentFixture<DrRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
