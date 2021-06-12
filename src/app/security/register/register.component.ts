import { Component, OnInit } from '@angular/core';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { userCredentials } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  errors: string[] = [];

  ngOnInit(): void {
  }

  register(userCredentials: userCredentials) {
    this.errors = [];
    this.securityService.register(userCredentials).subscribe(response => {
      console.log(response);
    }, error => this.errors = parseWebAPIErrors(error));
  }

}
