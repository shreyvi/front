import { Component ,OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';



export interface PeriodicElement {
  fname: string;
  lname: string;
  contact: string;
  salary: string;
  department: string;
  salaryA:string;
  salaryB:string;
  salaryC:string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['fname', 'lname', 'contact', 'salary', 'department', 'action'];
  dataSource:  PeriodicElement[] = [];
  displayedColumns1: string[] = ['fname', 'lname', 'contact', 'salary', 'department'];
  dataSource1:  PeriodicElement[] = [];
  displayedColumns2: string[] = ['fname', 'lname', 'contact', 'salary', 'department'];
  dataSource2:  PeriodicElement[] = [];
  displayedColumns3: string[] = ['fname', 'lname', 'contact', 'salary', 'department'];
  dataSource3:  PeriodicElement[] = [];
  displayedColumns4: string[] = ['fname', 'lname', 'contact', 'salary', 'department'];
  dataSource4:  PeriodicElement[] = [];
  displayedColumns5: string[] = ['fname', 'lname', 'contact', 'salary', 'department'];
  dataSource5:  PeriodicElement[] = [];
 

  employee!: any;
  employeeCount!: any;
  software!: any;
  softwareCount!: any;
  hardware!: any;
  hardwareCount!: any;
  salaryA:PeriodicElement[] = [];
  salaryACount!:number;
  salaryB:PeriodicElement[] = [];
  salaryBCount!:number;
  salaryC:PeriodicElement[] = [];
  salaryCCount!:number;
  
  constructor(private dataService: DataService,private dialog:MatDialog) {}

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
        this.dataSource1 = data.fetchdepresult;
        this.softwareCount = this.dataSource1.length;
        console.log(this.softwareCount);
      },
      () => {

      }
    );

    const dept2: string = 'Hardware';
    this.dataService.fetchSoftware(dept2).subscribe(
      (data: any) =>{
        console.log(data);
        this.dataSource2 = data.fetchdepresult;
        this.hardwareCount = this.dataSource2.length;
        console.log(this.hardwareCount);
      },
      () => {

      }
    );
    
    this.dataService.fetchsalaryA().subscribe(
      (data: any) => {
        console.log(data);
        this.dataSource3 = data.fetchsalresult;
        this.salaryACount = this.dataSource3.length;
        console.log(this.salaryACount);
      },
      () => {

      }
    );

    this.dataService.fetchsalaryB().subscribe(
      (data: any) => {
        console.log(data);
        this.dataSource4= data.fetchsalresult;
        this.salaryBCount = this.dataSource4.length;
        console.log(this.salaryBCount);
      },
      () =>{

      }
    );
    this.dataService.fetchsalaryC().subscribe(
      (data: any) => {
        console.log(data);
        this.dataSource5 = data.fetchsalresult;
        this.salaryCCount = this.dataSource5.length;
        console.log(this.salaryCCount);
      },
      () => {

      }
    );
    
  }
  
  // dialogue(user: any): void {
  //   const id = user.ID;
  //   this.dataService.dialogue(id).subscribe(
  //     () =>{
  //       console.log("Successfully edited the User!");
  //       this.ngOnInit();
  //     },
  //     (error) =>{
  //       console.error("Error While editing the User!", error);
  //     }
  //   );
  // }

  editUser(employee: any){
    console.log("editbutton Click");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {employee};
    const dialogRef = this.dialog.open(DialogueComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(userAdded => {
      this.ngOnInit();
    });
  }
  

  deleteUser(user: any){
    const id = user.ID;
    this.dataService.deleteUser(id).subscribe(
      () =>{
        console.log("Successfully Delete the User!");
        this.ngOnInit();
      },
      (error) =>{
        console.error("Error While deleting the User!", error);
      }
    );

  }
}
