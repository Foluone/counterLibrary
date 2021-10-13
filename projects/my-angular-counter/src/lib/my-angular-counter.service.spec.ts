import { TestBed } from '@angular/core/testing';

import { MyAngularCounterService } from './my-angular-counter.service';

describe('MyAngularCounterService', () => {
  let service: MyAngularCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAngularCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
