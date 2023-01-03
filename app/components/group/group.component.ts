import { Component, OnInit, Input } from '@angular/core';
import { GroupItem } from 'src/app/models/group-item.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {
  @Input() title:string;
  @Input() items: GroupItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
