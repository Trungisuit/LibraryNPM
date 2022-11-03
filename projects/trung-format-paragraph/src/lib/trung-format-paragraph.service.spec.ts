import { TestBed } from '@angular/core/testing';

import { TrungFormatParagraphService } from './trung-format-paragraph.service';

describe('TrungFormatParagraphService', () => {
  let service: TrungFormatParagraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrungFormatParagraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
