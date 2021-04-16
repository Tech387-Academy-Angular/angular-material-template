import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class FetchingServiceService {


  constructor(private http: HttpClient) { }

  public customers:Customer[];
  objects:Object[];

  getData() {
    return this.http.get<Customer[]>('https://jsonplaceholder.typicode.com/users').subscribe(customer=>{
        this.customers=customer;
    });
  }
  getCustomer(ID:number)
  {
      console.log("USao u getCustomer");
      for(var i=0;i<this.customers.length;i++)
      {
          if(this.customers[i].id==ID)
            console.log(this.customers[i].name);
      }
  }
  getCustomers()
  {
      return this.customers;
  }
  getobjects()
  {
      console.log(this.objects);
  }
}