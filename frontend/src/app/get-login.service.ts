import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetLoginService {

  constructor() { }

  private loginSubject = new BehaviorSubject<string | null>(null);

  setLogin(login: string) {
    this.loginSubject.next(login);
  }

  getLogin() {
    return this.loginSubject.asObservable();
  }
}
