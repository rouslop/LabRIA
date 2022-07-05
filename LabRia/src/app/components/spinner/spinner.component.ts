import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: '<div class = "overlay" *ngif ="isloading$ | async"><div class="lds-dual-ring"></div></div>',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isloading$ = this.spinnersvc.isloading$;
  constructor(public spinnersvc: SpinnerService) { }

  ngOnInit(): void {
  }

}
