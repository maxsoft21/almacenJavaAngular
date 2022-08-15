import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user:any = null;
  
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(
    private rotuer: Router) { }

  ngOnInit(): void {
  }

  public logout(){
    //this.login.logout();
    //window.location.reload(); 
    this.rotuer.navigate(['/']);
  }

}
