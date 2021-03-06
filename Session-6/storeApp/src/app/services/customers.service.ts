import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customers: Customer[] = [
    { id: 1, name: 'John', phone: '9988776655', email: 'john@abc.xyz', city: 'Pasedena' },
    { id: 2, name: 'Asif', phone: '1122334455', email: 'asif@abc.xyz', city: 'Utah' },
    { id: 3, name: 'Harry', phone: '3355776644', email: 'harry@abc.xyz', city: 'Manchester' },
    { id: 4, name: 'Sarah', phone: '2244668800', email: 'sarah@abc.xyz', city: 'New York' }
];

constructor(private loggingService: LoggingService) {}

getCustomers(): Customer[] {
    return this.customers;
}

getCustomer(id: number): Customer {
    this.loggingService.logMessage('Get Product, id: ' + id);
    const customer = this.customers.find(
        customer => customer.id === id
    )
    return customer as Customer; 
}

addCustomer(customer: Customer) {
    const newCustomer = new Customer();
    newCustomer.id = this.generateId();
    newCustomer.name = customer.name;
    newCustomer.email = customer.email;
    newCustomer.phone = customer.phone;
    newCustomer.city = customer.city;

    this.customers.push(newCustomer);
}

private generateId(): number {
    let id = 1;
    let lastItemIndex = this.customers.length - 1;
    if(lastItemIndex > -1) {
        id = this.customers[lastItemIndex].id + 1;
    }
    return id;
}

updatecustomer(id: number, customerInfo: Customer) {
    const customer = this.getCustomer(id);

    if(customer) {
        customer.name = customerInfo.name;
        customer.email = customerInfo.email;
        customer.phone = customerInfo.phone;
        customer.city = customerInfo.city;
    }
}

deletecustomer(id: number) {
    const index = this.customers.findIndex(
        customer => customer.id === id
    )

    if(index >= 0) {
        this.customers.splice(index, 1);
    }
}
}
