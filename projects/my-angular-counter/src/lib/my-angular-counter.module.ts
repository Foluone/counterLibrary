import { NgModule } from '@angular/core';
import { MyAngularCounterComponent } from './my-angular-counter.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';



@NgModule({
  declarations: [
    MyAngularCounterComponent,
    CounterDemoComponent
  ],
  imports: [
  ],
  exports: [
    MyAngularCounterComponent,
    CounterDemoComponent
  ]
})
export class MyAngularCounterModule { }
