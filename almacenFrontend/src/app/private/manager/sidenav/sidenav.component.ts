import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

const SMALL_WIDTH_BEACKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall:Boolean = true;
  constructor(private beakpointObserver:BreakpointObserver) { }

  ngOnInit(): void {
    this.beakpointObserver.observe([`(max-width: ${SMALL_WIDTH_BEACKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
  });

}

}
