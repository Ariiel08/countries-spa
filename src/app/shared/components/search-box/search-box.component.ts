import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = '';

  onValueEmitter( term: string ): void {
    this.onValue.emit(term);
  }
}
