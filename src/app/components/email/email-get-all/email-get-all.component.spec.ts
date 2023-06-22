import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailGetAllComponent } from './email-get-all.component';

describe('EmailGetAllComponent', () => {
  let component: EmailGetAllComponent;
  let fixture: ComponentFixture<EmailGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
