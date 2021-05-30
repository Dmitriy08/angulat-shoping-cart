import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  exports: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ForExampleModule { }
