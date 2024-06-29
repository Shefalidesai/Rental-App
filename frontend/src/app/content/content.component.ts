import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';
import { RentalAppService } from '../rental-app.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	
	user!:string;
	showMessage: boolean = false;
	message: string = '';
	componentToShow: string = "welcome";
	firstName!: string;
	lastName!: string;
	data: string[] = [];
	showLogin:boolean= true;
	showName:boolean=false;

	constructor(private axiosService: AxiosService, private router:Router,private service:RentalAppService) { }

	showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  ngOnInit(): void {
	  this.firstName;
	  console.log(this.firstName);
	  
  }
 
  getUserName(input: any): void {
	
  }
  
  

	onLogin(input: any): void {
		this.axiosService.request(
		    "POST",
		    "/login",
		    {
		        login: input.login,
		        password: input.password
		    }).then(
		    response => {
		        this.axiosService.setAuthToken(response.data.token);
				this.message = 'Login successfully!';
				this.showMessage = true;
		        this.componentToShow = "messages";
				this.showLogin=false;
				setTimeout(() => {
					this.showMessage = false;
				  }, 3000);
		    }).catch(
		    error => {
		        this.axiosService.setAuthToken(null);
		        console.log("Error while Login, Check Username or passqord");
				
		    }
		);

	}

	async onRegister(input: any) {
		this.axiosService.request(
		    "POST",
		    "/register",
		    {
		        firstName: input.firstName,
		        lastName: input.lastName,
		        login: input.login,
		        password: input.password,
				
		    }).then(
		    response => {
		        this.axiosService.setAuthToken(response.data.token);
				this.firstName=response.data.firstName;
				console.log(this.firstName);
				
				this.message = 'Registration successfully!';
				this.showMessage = true;
				this.showLogin=false;
		        this.componentToShow = "messages";
				this.showName=true;

				 this.service.getNames(this.firstName).subscribe(
					data => {
					  this.user = data;
					  console.log(data);
					},
					error => {
					  console.error('Error fetching user data', error);
					}
				  );
				setTimeout(() => {
					this.showMessage = false;
				  }, 3000);
				 
		    }).catch(
		    error => {
		        this.axiosService.setAuthToken(null);
		        this.componentToShow = "welcome";
		    }
		);
	}

	onBack(){
		this.router.navigate([''])
	}

}
