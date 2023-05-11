import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToDoctorComponent } from './talk-to-doctor.component';

describe('TalkToDoctorComponent', () => {
  let component: TalkToDoctorComponent;
  let fixture: ComponentFixture<TalkToDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkToDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
