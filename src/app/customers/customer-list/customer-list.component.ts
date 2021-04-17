import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '../../core/services/notification.service';
import {MatDialog} from '@angular/material/dialog';

import { Customer } from '../customer.model';
import { FetchingServiceService } from '../customer.service';
import { UserDetailComponent } from 'src/app/shared/user-detail/user-detail.component';
import { customerDetail } from '../customerDetail.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource = new MatTableDataSource<Customer>();
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,private fethService:FetchingServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {

    this.fethService.getData().subscribe(sub=>{
      this.dataSource.data=sub;
    });
    this.titleService.setTitle('angular-material-template - Customers');
    this.dataSource.sort = this.sort;
  }
  getRecord(obj:customerDetail){
    
    this.dialog.open(UserDetailComponent,{data:{
      name:obj.name,
      address:obj.address,
      phone:obj.phone,
      company:obj.company,
      email:obj.email,
      username:obj.username,
      website:obj.website
    }});

  }

}
