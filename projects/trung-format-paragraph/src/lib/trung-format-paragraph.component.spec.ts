import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrungFormatParagraphComponent } from './trung-format-paragraph.component';

describe('TrungFormatParagraphComponent', () => {
  let component: TrungFormatParagraphComponent;
  let fixture: ComponentFixture<TrungFormatParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrungFormatParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrungFormatParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
