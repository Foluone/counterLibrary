import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAngularCounterComponent } from './my-angular-counter.component';

describe('MyAngularCounterComponent', () => {
  let component: MyAngularCounterComponent;
  let fixture: ComponentFixture<MyAngularCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAngularCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAngularCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
