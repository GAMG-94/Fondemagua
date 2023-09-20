import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  open = false;
 @Output() active = new EventEmitter<boolean>();
 closeModal(){
    this.active.emit(false);
 }
}
