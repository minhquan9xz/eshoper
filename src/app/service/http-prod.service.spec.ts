import { TestBed } from '@angular/core/testing';

import { HttpProdService } from './http-prod.service';

describe('HttpProdService', () => {
  let service: HttpProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
