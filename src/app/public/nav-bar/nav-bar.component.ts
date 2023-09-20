import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  active: boolean = false;
  open: boolean = false;
  ngOnInit(){

  }
  activateMenu(){
    this.active = !this.active;
  }

  openModal(e: boolean){
    this.open = e;
    this.active = false;
  }
}
