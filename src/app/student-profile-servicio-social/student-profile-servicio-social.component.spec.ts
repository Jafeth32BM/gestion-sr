import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileServicioSocialComponent } from './student-profile-servicio-social.component';

describe('StudentProfileServicioSocialComponent', () => {
  let component: StudentProfileServicioSocialComponent;
  let fixture: ComponentFixture<StudentProfileServicioSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileServicioSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileServicioSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
