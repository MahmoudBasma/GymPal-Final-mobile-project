import { TestBed } from '@angular/core/testing';

import { UpdateSpecialtyService } from './update-specialty.service';

describe('UpdateSpecialtyService', () => {
  let service: UpdateSpecialtyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSpecialtyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
