import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileResidenciaComponent } from './student-profile-residencia.component';

describe('StudentProfileResidenciaComponent', () => {
  let component: StudentProfileResidenciaComponent;
  let fixture: ComponentFixture<StudentProfileResidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileResidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
