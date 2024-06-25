import { EventEmitter, Component, Output } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  })
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();


  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  login: string = "";
  password: string = "";
  componentToShow: string = "welcome";
  activeTab: 'signin' | 'signup' = 'signin';
  constructor(private axiosService: AxiosService,private router:Router){};
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

  
	onBack(){
		this.router.navigate([''])
	}
}
