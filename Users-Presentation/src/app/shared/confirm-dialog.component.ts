import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent{

  title: string;
  content: string;

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA){title, content}) { 

                // Set Dialog Fields
                this.title = title;
                this.content = content;

              }
    
    onDismiss()
    {
      // Close the dialog and return false
      this.dialogRef.close(false);
    }

    onConfirm()
    {
      // Close the dialog and return true
      this.dialogRef.close(true);
    }

}
