import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-angular-counter',
  template: `
    <p>
      my-angular-counter works!
    </p>
  `,
  styles: [
  ]
})
export class MyAngularCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
