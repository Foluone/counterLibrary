import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-counter',
  template: `
    <p>
      my-counter works!
    </p>
  `,
  styles: [
  ]
})
export class MyCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
