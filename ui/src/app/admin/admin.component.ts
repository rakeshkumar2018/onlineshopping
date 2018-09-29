import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { win32 } from 'path';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menuPath:string;
  constructor(private _actRoute:ActivatedRoute) { }

  ngOnInit() {
    debugger;
    this.menuPath=window.location.hash;
  }

}
