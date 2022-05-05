import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomersService, Customer } from 'src/app/apis/customers.service';
import { FeesService, Fee} from 'src/app/apis/fees.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  customers: Customer[];
  customer: any;

  
  constructor(private modalCtr: ModalController,
    private Ccservice: CustomersService, private Fservice: FeesService) { }

  ngOnInit() {
    this.Ccservice.getTrainerCustomers().subscribe(response =>{
      console.log(response);
      this.customers = response;
    })
    console.log(this.types)

  }

  selectedCustomer: any;
   customerSelected(){
    console.log("selected customer : "+JSON.stringify(this.selectedCustomer));
  }

  types=[
    "EMS", 
    "PT", 
    "Yogo", 
    "Boxing", 
    "MMA"
  ];
  now: Date;
  date: string;

  selectedType: any;
  typeSelected(){
    console.log("selected type : "+JSON.stringify(this.selectedType));
  }
  
  markAttendance(){
    fee: Fee ={
      
    }

    console.log(this.selectedCustomer["name"], this.selectedType);
    this.now = new Date();
    this.date = this.now.getFullYear() + "-" + (this.now.getDay()+1) + "-"+ this.now.getMonth; 
    console.log(this.date);
    
    this.Fservice.addAttendanceFees(this.fee).subscribe(response =>{
      console.log(response);
    })

  }

  async close() {
    this.modalCtr.dismiss();
  }

  



}
