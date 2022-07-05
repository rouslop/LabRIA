import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl:'./spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isloading$ = this.spinnersvc.isloading$;
  constructor(public spinnersvc: SpinnerService) { }

  ngOnInit(): void {
  }

}
