import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploremoreComponent } from './exploremore.component';

describe('ExploremoreComponent', () => {
  let component: ExploremoreComponent;
  let fixture: ComponentFixture<ExploremoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploremoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploremoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
