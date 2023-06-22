import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailGetSingleComponent } from './email-get-single.component';

describe('EmailGetSingleComponent', () => {
  let component: EmailGetSingleComponent;
  let fixture: ComponentFixture<EmailGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailGetSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
