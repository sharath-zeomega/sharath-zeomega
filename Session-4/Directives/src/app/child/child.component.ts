import { Component, OnInit,EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:[`pdata`],
  outputs:[`cevent`]
})
export class ChildComponent implements OnInit {

  constructor() { }

  
  public pdata:string="";
  cevent=new EventEmitter<string>();
  onChange(value:string){
      this.cevent.emit(value);
      
  }
  ngOnInit(): void {
  
  }

}
