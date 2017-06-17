import { Component } from '@angular/core';

@Component({
  selector: 'base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent {

  public isVisible: boolean;

  constructor () {
    this.isVisible = false;
  }

  public open () {
    this.isVisible = true;
  }

  public close () {
    this.isVisible = false;
  }

  public preventClosing (event: MouseEvent) {
    event.stopPropagation();
  }

}
