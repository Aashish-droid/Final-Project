import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToPatientComponent } from './talk-to-patient.component';

describe('TalkToPatientComponent', () => {
  let component: TalkToPatientComponent;
  let fixture: ComponentFixture<TalkToPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkToPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
