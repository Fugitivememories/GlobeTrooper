import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { AllModule } from '../all/all.module';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[AllModule]}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('should populate the url',()=>{
    const service: LoginService = TestBed.get(LoginService);
    console.log("here")

  
  })
});
