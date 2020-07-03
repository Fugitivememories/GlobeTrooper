import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './core/auth.service';
import { MockService } from './service/mockServices';
import { AllModule } from './all/all.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AllModule],
      declarations: [],
      providers:[{provide:AuthService,useClass:MockService},{provide: APP_BASE_HREF, useValue: '/'}]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('TAC 1/3 - should be created', () => {   // 1. AppComp Creation
    expect(component).toBeTruthy();
  });
  it(`should have as title 'WanderLust'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    let service = app.auth;
    spyOn(service,'loadSessionUser');
    spyOn(service,'loadPackages');
    expect(app.title).toEqual('WanderLust');
  }));  
});