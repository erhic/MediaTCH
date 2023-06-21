import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPassPageComponent } from './create-new-pass-page.component';

describe('CreateNewPassPageComponent', () => {
  let component: CreateNewPassPageComponent;
  let fixture: ComponentFixture<CreateNewPassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewPassPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewPassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
