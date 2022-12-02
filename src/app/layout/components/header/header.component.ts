import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public hideMenu = true;

  @Output()
  public drawer = new EventEmitter<void>();

  public toggle() {
    this.drawer.emit();
  }
}
