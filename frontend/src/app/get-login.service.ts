import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetLoginService {

  constructor(private router:Router
  ) { }

  private loginSubject = new BehaviorSubject<string | null>(null);

  setLogin(login: string) {
    localStorage.setItem('login', login);
    this.loginSubject.next(login);

  }

  getLogin() {
    return this.loginSubject.asObservable();
  }

  checkLogin() {
    if (!this.loginSubject.value) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('login');
    this.loginSubject.next(null);
    this.router.navigate(['/login']);
  }
}

