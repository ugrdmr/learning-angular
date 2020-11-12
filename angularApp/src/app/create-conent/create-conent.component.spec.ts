import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConentComponent } from './create-conent.component';

describe('CreateConentComponent', () => {
  let component: CreateConentComponent;
  let fixture: ComponentFixture<CreateConentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
