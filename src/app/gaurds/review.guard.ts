import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';

export const reviewGuard: CanActivateFn = (route, state) => {
  const login = inject(LoginService);
  if(login.getStatus())
      return true
    return false
};
