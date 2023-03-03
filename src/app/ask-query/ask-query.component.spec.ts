import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQueryComponent } from './ask-query.component';

describe('AskQueryComponent', () => {
  let component: AskQueryComponent;
  let fixture: ComponentFixture<AskQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
