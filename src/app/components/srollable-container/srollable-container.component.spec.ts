import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrollableContainerComponent } from './srollable-container.component';

describe('SrollableContainerComponent', () => {
  let component: SrollableContainerComponent;
  let fixture: ComponentFixture<SrollableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrollableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrollableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
