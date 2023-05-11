import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesNameComponent } from './diseases-name.component';

describe('DiseasesNameComponent', () => {
  let component: DiseasesNameComponent;
  let fixture: ComponentFixture<DiseasesNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseasesNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiseasesNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
