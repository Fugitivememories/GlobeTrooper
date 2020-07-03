import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FootComponent } from './foot.component';
import { AllModule } from '../all/all.module';
import { APP_BASE_HREF } from '@angular/common';


describe('FootComponent', () => {
  let component: FootComponent;
  let fixture: ComponentFixture<FootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AllModule],
      declarations: [],
      providers:[{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
