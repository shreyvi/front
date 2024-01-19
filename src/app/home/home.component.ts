import { Component ,OnInit} from '@angular/core';
import { DataService } from '../data.service'

export interface PeriodicElement {
  fname: string;
  lname: string;
  contact: string;
  salary: string;
  department: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['fname', 'lname', 'contact', 'salary', 'department'];
  dataSource: any = [];

  employee!: any;
  employeeCount!: any;
  software!: any;
  softwareCount!: any;
  hardware!: any;
  hardwareCount!: any;
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchEmployee().subscribe(
      (response: any) =>{
        this.dataSource = response.fetchdataresult;
        this.employeeCount = this.dataSource.length;
      },
      (error)=>{
        console.log();
      }
    );
    
    const dept: string = 'Software';
    this.dataService.fetchSoftware(dept).subscribe(
      (data: any) =>{
        console.log(data);
        this.software = data.fetchdepresult;
        this.softwareCount = this.software.length;
        console.log(this.softwareCount);
      },
      () =>{

      }
    );

    const dept2: string = 'Hardware';
    this.dataService.fetchSoftware(dept2).subscribe(
      (data: any) =>{
        console.log(data);
        this.hardware = data.fetchdepresult;
        this.hardwareCount = this.hardware.length;
        console.log(this.hardwareCount);
      },
      () =>{

      }
    );
  }
}
