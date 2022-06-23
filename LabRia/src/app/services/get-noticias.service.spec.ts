import { TestBed } from '@angular/core/testing';

import { GetNoticiasService } from './get-noticias.service';

describe('GetNoticiasService', () => {
  let service: GetNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
