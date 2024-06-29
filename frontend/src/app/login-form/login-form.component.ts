import { EventEmitter, Component, Output } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';
import { RentalAppService } from '../rental-app.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  })
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();
  @Output() onSuccessfulLogin = new EventEmitter();


  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  login: string = "";
  password: string = "";
  componentToShow: string = "welcome";
  activeTab: 'signin' | 'signup' = 'signin';
  data!:string;

  constructor(private http: HttpClient,private axiosService: AxiosService,private router:Router,private service:RentalAppService){};

 
  getName():void{
  this.onSuccessfulLogin.emit({"firstName": this.firstName});
  }

  toggleForm(tab: 'signin' | 'signup'): void {
    this.activeTab = tab;
  }

	onLoginTab(): void {
		this.active = "login";
    
	}

	onRegisterTab(): void {
		this.active = "register";
	}

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({"firstName": this.firstName, "lastName": this.lastName, "login": this.login, "password": this.password});
  }

  
	
}
