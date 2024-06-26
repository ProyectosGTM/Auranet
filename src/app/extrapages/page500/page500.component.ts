import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page500',
  templateUrl: './page500.component.html',
  styleUrls: ['./page500.component.scss']
})

/**
 * Pages-500 component
 */
export class Page500Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('authentication-bg')
    document.body.removeAttribute('data-topbar');
  }

  ngOnDestroy() { 
    document.body.classList.remove('authentication-bg')
  }

}
