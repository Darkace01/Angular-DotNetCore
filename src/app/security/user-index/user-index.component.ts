import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { userDTO } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  users!: userDTO[];
  page: number = 1;
  pageSize: number = 10;
  totalAmountOfRecords: any;
  columnsToDisplay = ["email", "actions"]

  ngOnInit(): void {
    this.securityService.getUsers(this.page, this.pageSize)
      .subscribe((response: HttpResponse<userDTO[]>) => {
        this.users = response.body as userDTO[];
        this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
      });
  }

  make(id: string) {
    this.securityService.makeAdmin(id).subscribe(() => {
      Swal.fire("Success", "The operation was successful", "success");
    });
  }

  remove(id: string) {
    this.securityService.removeAdmin(id).subscribe(() => {
      Swal.fire("Success", "The operation was successful", "success");
    });
  }

}
