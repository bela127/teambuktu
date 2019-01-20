import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionDetailComponent } from './completion-detail.component';

describe('CompletionComponent', () => {
  let component: CompletionDetailComponent;
  let fixture: ComponentFixture<CompletionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
