import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContinentComponent } from './search-continent.component';

describe('SearchContinentComponent', () => {
  let component: SearchContinentComponent;
  let fixture: ComponentFixture<SearchContinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
