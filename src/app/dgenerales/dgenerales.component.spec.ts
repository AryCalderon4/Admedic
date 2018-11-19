import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeneralesComponent } from './dgenerales.component';

describe('DgeneralesComponent', () => {
  let component: DgeneralesComponent;
  let fixture: ComponentFixture<DgeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
