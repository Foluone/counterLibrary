import { NgModule } from '@angular/core';
import { MyCounterComponent } from './my-counter.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';



@NgModule({
  declarations: [
    MyCounterComponent,
    CounterDemoComponent
  ],
  imports: [
  ],
  exports: [
    MyCounterComponent, 
    CounterDemoComponent
  ]
})
export class MyCounterModule { }
