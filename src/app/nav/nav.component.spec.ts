import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { AuthService } from '../core/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AllModule } from '../all/all.module';
import { APP_BASE_HREF } from '@angular/common';
import { MockService } from '../service/mockServices';
import { Users } from '../models/User';
import { ASTWithSource } from '@angular/compiler';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let link: DebugElement;
  let routerOutletTag: DebugElement;
  let auth:AuthService;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
      imports: [AllModule,RouterTestingModule],
      declarations: [],
      providers:[{provide:AuthService,useClass:MockService},{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    auth = component.auth;
  });

  it('TAC 1 should create nav component', () => {
    expect(component).toBeTruthy();
  });


  it('TAC 2 - to check the router link to check for hot deals',()=>{ //2. Router
    link=fixture.debugElement.query(By.css('nav > div > ul > li > a'));
    routerOutletTag=fixture.debugElement.query(By.css('router-outlet'));
    expect(link.attributes['ng-reflect-router-link']).toMatch('[\/]?hotdeals');
  })
  it('TAC 3 - to check the router link when user not logged in',()=>{ //2. Router
    link=fixture.debugElement.query(By.css('nav > div > ul > li > a'));
    var list=fixture.debugElement.queryAll(By.css('.nav-link'));
    expect(list.length).toBe(3);
  })
  it('TAC 4 - to check the router link for the main home link from navbar-brand class',()=>{ //2. Router
    link=fixture.debugElement.query(By.css('nav > a'));
    expect(link.attributes['ng-reflect-router-link']).toMatch('[\/]?home');
  })

  it('TAC 6 - to check the router link for the main home link all links when logged out',()=>{
    // link=fixture.debugElement.query(By.css('nav > a'));
    var list=fixture.debugElement.queryAll(By.css('nav > div > ul > li > a'));
    expect(list[0].attributes['ng-reflect-router-link']).toMatch('[\/]?hotdeals');
    expect(list[1].attributes['ng-reflect-router-link']).toMatch('[\/]?viewBookings');
    expect(list[2].attributes['ng-reflect-router-link']).toMatch('[\/]?login');
  })

  it('TAC 7 - to check the logged in to be true',()=>{

      let data:Users=new Users();
      data.userName =  "sam";
      auth.nextUser(data);
      // spyOn(auth.sessionUser,'subscribe').and.returnValue(data);
      component.ngOnInit()
      fixture.detectChanges();
      expect(component.loggedIn).toBe(true);
     
  })
  
  it('TAC 7 - to check the logged in to be true',()=>{

    let data:Users=new Users();
    data.userName =  "sam";
    auth.nextUser(data);
    // spyOn(auth.sessionUser,'subscribe').and.returnValue(data);
    component.ngOnInit()
    fixture.detectChanges();
    expect(component.userName).toBe("sam");
   
})

  
//   it('TAC 7 - to check the logged in to be true',()=>{

//     let data:Users=new Users();
//     data.userName =  "sam";
//     auth.nextUser(data);
//     spyOn(auth.sessionUser,'subscribe').and.returnValue(data);
//     component.ngOnInit()
//     fixture.detectChanges();
//     var list=fixture.debugElement.queryAll(By.css('nav > div > ul > li > a'));
//     expect(list.length).toBe(4);
   
// })



});
