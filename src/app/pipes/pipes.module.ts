import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConvertToSpacesPipe} from "./ConvertToSpacesPipe";



@NgModule({
  declarations: [
      ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
      ConvertToSpacesPipe
  ]
})
export class PipesModule { }
