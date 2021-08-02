import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratagemsContainerComponent } from './stratagems-container.component';

describe('StratagemsContainerComponent', () => {
  let component: StratagemsContainerComponent;
  let fixture: ComponentFixture<StratagemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratagemsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratagemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
