import { ChangeDetectionStrategy, Component, EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabTitleComponent implements OnInit {

  @Output()
  tabTitleClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  _onTabTitleClick() {
    this.tabTitleClicked.emit();
  }

}