import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog, not MatDialogModule
import { DialogueComponent } from './dialogue/dialogue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboardnew';

  constructor(private matdialog: MatDialog) {} // Use MatDialog here

  editUser() {
    this.matdialog.open(DialogueComponent);
  }
}
