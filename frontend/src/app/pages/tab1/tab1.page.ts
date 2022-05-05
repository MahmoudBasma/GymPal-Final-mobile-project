import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { now } from '@ionic/core/dist/types/utils/helpers';
import { StringifyOptions } from 'querystring';
import { TouchSequence } from 'selenium-webdriver';
import { QuotesService, Quote } from 'src/app/apis/quotes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  quoteOfToday: Quote;
  hr = new Date().getHours();
  greeting: string;
  
  setGreeting(){
    console.log(this.hr);
    if(this.hr >= 5 && this.hr < 12){
      this.greeting = "Good Morning!"
    }
    else if(this.hr >= 12 && this.hr < 5){
      this.greeting = "Good Day!"
    }
    else if(this.hr >= 5 && this.hr < 8){
      this.greeting = "Good After Noon"
    }
    else{
      this.greeting = "Good Evening";
    }
  }
  constructor(private Qservice:QuotesService) {}

  ngOnInit(){
    this.Qservice.getRandomQuote().subscribe(response => {
      this.quoteOfToday = response;
      console.log(response);
    })
    this.setGreeting();
  }


}
