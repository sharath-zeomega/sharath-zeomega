import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }
  onGoToProducts() {
    //this.router.navigate(['/products']);
    this.loggingService.logMessage('Home - Go To Products button clicked.');
  }
  onGoToCustomers() {
   // this.router.navigate(['/customers']);
    this.loggingService.logMessage('Home - Go To Customers button clicked.');
  }
}

