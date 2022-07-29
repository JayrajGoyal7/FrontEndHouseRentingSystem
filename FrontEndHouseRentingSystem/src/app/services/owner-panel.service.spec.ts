import { TestBed } from '@angular/core/testing';

import { OwnerPanelService } from './owner-panel.service';

describe('OwnerPanelService', () => {
  let service: OwnerPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
