import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports:[
    MatCardModule,
    MatInputModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MyOwnMaterialModule { }
