import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
  public tabs = [ 1, 2 ];
  
  activeTabIndex: number = 1;

  _onTabTitleClicked(newActiveIndex: number): void {
    this.activeTabIndex = newActiveIndex;
    console.log(newActiveIndex);
  }

  public dec() {
    this.tabs = this.tabs.slice(0, -1);
    if (this.activeTabIndex === this.tabs.length + 1) {
      this.activeTabIndex = 1;
    }
  }

  public inc() {
    this.tabs = [ ...this.tabs, (this.tabs.length + 1) ];
  }
}
