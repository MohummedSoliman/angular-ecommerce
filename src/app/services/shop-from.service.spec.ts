import { TestBed } from '@angular/core/testing';

import { ShopFromService } from './shop-from.service';

describe('ShopFromService', () => {
  let service: ShopFromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopFromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
