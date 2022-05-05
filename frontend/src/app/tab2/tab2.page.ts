import { Component, ViewChild, OnInit, Inject , LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { format } from 'url';
import { formatDate } from '@angular/common';
import { Alert } from 'selenium-webdriver';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

}
