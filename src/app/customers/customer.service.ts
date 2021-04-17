import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
import { customerDetail } from './customerDetail.model';

@Injectable({
  providedIn: 'root'
})
export class FetchingServiceService {


  constructor(private http: HttpClient) { }

  public customers:Customer[];
  public customersDetals:customerDetail[];

  
  getData() {
    this.saveData();
    return this.http.get<Customer[]>('https://jsonplaceholder.typicode.com/users');
  }
  getData1() {
    this.saveData();
    return this.http.get<customerDetail[]>('https://jsonplaceholder.typicode.com/users');
  }
  saveData()
  {
    return this.http.get<customerDetail[]>('https://jsonplaceholder.typicode.com/users').subscribe(customer=>{
        this.customersDetals=customer;
    });
  }
  getCustomer(obj:Object)
  {     
      
      var so = JSON.stringify(obj);
      
      for(var i=0;i<this.customers.length;i++)
      {
          if(JSON.stringify(this.customers[i])===so)
            {
              var x=this.customers[i];
            }
            console.log("nasao");
      }
      var hehe=JSON.parse(so);
      
      return hehe;
  }

  
}