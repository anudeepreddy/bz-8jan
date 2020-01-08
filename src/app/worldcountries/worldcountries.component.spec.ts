import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldcountriesComponent } from './worldcountries.component';

describe('WorldcountriesComponent', () => {
  let component: WorldcountriesComponent;
  let fixture: ComponentFixture<WorldcountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldcountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
