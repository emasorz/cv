import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() value:number;
  constructor() { }

  ngOnInit(): void {
  }

  getFloorValue():number{
    return Math.floor(this.value/2);
  }

  isHalf(index):boolean{
      return this.value/2 < index && this.value/2 > index-1
  }

}
