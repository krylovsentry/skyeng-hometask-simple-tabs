import { ChangeDetectionStrategy, Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {

  @Input()
  isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

}