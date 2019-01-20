import { TestBed } from '@angular/core/testing';

import { CompletionService } from './completion.service';

describe('CompletionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletionService = TestBed.get(CompletionService);
    expect(service).toBeTruthy();
  });
});
