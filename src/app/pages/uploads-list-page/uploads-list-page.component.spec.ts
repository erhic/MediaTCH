import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsListPageComponent } from './uploads-list-page.component';

describe('UploadsListPageComponent', () => {
  let component: UploadsListPageComponent;
  let fixture: ComponentFixture<UploadsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
