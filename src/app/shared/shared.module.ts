import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';


import { AuthService } from '../_auth/auth.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,		
		RouterModule		
	],
	declarations: [		
		SideBarComponent, 
		NavbarComponent
	], 
	exports: [
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule,
		SideBarComponent,
		NavbarComponent
	], 
	providers: []
})
export class SharedModule { }
