import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';
import { RentalAppService } from '../rental-app.service';
import { GetLoginService } from '../get-login.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
	@Output() returnUserFirstName= new EventEmitter();

	user!:string;
	showMessage: boolean = false;
	message: string = '';
	componentToShow: string = "welcome";
	firstName!: string;
	lastName!: string;
	data!: string;
	showLogin:boolean= true;
	showName:boolean=false;
	login!:string;
	loginAfterRegister!:string;
	showAfterLogin:boolean=false;
	userAfterLogin!:any;

	constructor(private axiosService: AxiosService, private router:Router,private service:RentalAppService,private loginservice:GetLoginService ) { }

	showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  ngOnInit(): void {  
  }
  
  

  async onLogin(input: any) {
	try {
	  const response = await this.axiosService.request("POST", "/login", {
		login: input.login,
		password: input.password
	  });


  
	  this.axiosService.setAuthToken(response.data.token);
	  this.loginservice.setLogin(input.login);
	  console.log("inputlogin", input.login);
	  
	 
	  this.message = 'Login successfully!';
	  this.showMessage = true;
	  this.componentToShow = "messages";
	  this.showLogin = false;
	  this.showAfterLogin = true;
  
	  try {
		const data = await this.service.getNameAfterLogin(response.data.login).toPromise();
		this.userAfterLogin= data;
	  } catch (error) {
		console.error("Error retrieving name after login", error);
		this.userAfterLogin = 'null';
	  }
  
	  setTimeout(() => {
		this.showMessage = false;
	  }, 3000);
  
	} catch (error) {
	  this.axiosService.setAuthToken(null);
	  console.error("Error while Login, Check Username or password", error);
	  this.message = 'Error while Login, Check Username or password';
	  this.showMessage = true;
  
	  setTimeout(() => {
		this.showMessage = false;
	  }, 3000);
	}
  }
  
	async onRegister(input:any) {
		this.message = 'Registration successfull, Now Login Again!';
		   this.showMessage = true;
		// try {
		//   const response = await this.axiosService.request("POST", "/register", {
		// 	firstName: input.firstName,
		// 	lastName: input.lastName,
		// 	login: input.login,
		// 	password: input.password,
		//   });
	
		//   // Setting the auth token and first name from the response
		//   this.axiosService.setAuthToken(response.data.token);
		// //   this.firstName = response.data.firstName;
	
		// this.loginservice.setLogin(input.login);
		//   // Displaying the registration success message
		//   this.message = 'Registration successfull, Now Login Again!';
		//   this.showMessage = true;
		//   this.showLogin = false;
		//   this.componentToShow = "messages";
		//   this.showName = true;
	
		//   // Making the subsequent request to get user names using the first name
		//   const data = await this.service.getNames(this.firstName).toPromise();
		//   this.user = data.firstName;
		//   console.log(data);
	
		//   // Hiding the message after 3 seconds
		//   setTimeout(() => {
		// 	this.showMessage = false;
		//   }, 3000);
		// } catch (error) {
		//   console.error('Error occurred:', error);
		// }
	  }
	

	onBack(){
		this.router.navigate([''])
	}

}
