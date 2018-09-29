import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  h:any=[]
  constructor() { }

  ngOnInit() {
  }

  fnVenderEdit(rowData){
    
  }

}
