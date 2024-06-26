import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})

/**
 * Maintenance page component
 */
export class MaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.setAttribute('class', 'authentication-bg');
  }

  ngOnDestroy() { 
    document.body.classList.remove('authentication-bg')
  }
}
