import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  Response:any;
  constructor(private service:ApiserviceService){}

  ngOnInit(){
    this.service.returnFn().subscribe((response)=>{this.Response=response})
  }
}
