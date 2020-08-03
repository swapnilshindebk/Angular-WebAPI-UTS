import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addupdate-user',
  templateUrl: './addupdate-user.component.html',
  styleUrls: ['./addupdate-user.component.css']
})
export class AddUpdateUserComponent implements OnInit {

  userID: number;
  userForm: FormGroup;
  status: string;

  // Snackbar Positioning
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddUpdateUserComponent>,
              @Inject(MAT_DIALOG_DATA){UserID, Name, EmailID, IsAdmin, MobileNumber},
              private userService: UsersService,
              private snackbar: MatSnackBar) { 

                // Set values of Non-Form Fields
                this.userID = UserID;
                // this.status = Status;

                this.userForm = formBuilder.group({
                  name: [Name, Validators.required],
                  emailID: [EmailID, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
                  isAdmin: [IsAdmin, Validators.required],
                  mobileNumber: [MobileNumber, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
                });

              }

  ngOnInit(): void {
  }

  saveUpdateUser()
  {
    //console.log("Form Value: ", this.userForm.value);
    //console.log("User ID: ", this.userID);

    // Set the Values for Non-Form Fields
    this.userForm.value.UserID = this.userID;
    // this.userForm.value.Status = this.status;

    if(this.userForm.valid)
    {
      if(this.userForm.dirty)
      {
        if(this.userID != undefined && this.userID != 0)
        {
          // Update an existing user
          this.updateExistingUser();
        }
        else
        {
          // Create a new User
          this.addNewUser();
        }
      }
      else
      {
        this.onSuccess("Nothing to save");
      }
    }
    else
    {
      this.onError("Invalid Form Values");
    }

  }

  addNewUser()
  {
    this.userService.addUser(this.userForm.value).subscribe(
      (data) => {
        //console.log("Created Result: ", data);
        this.onSuccess(data.toString());
        this.dialogRef.close();
      },
      (error)=> {
        console.log("Error in Adding User", error);
        this.onError("Oops! Something went wrong");
      }
    );
  }

  updateExistingUser()
  {
    this.userService.updateUser(this.userID, this.userForm.value).subscribe(
      (data) => {
        //console.log("Updated Result: ", data);
        this.onSuccess(data.toString());
        this.closeDialog();
      },
      (error)=>{
        console.log("Error in Update: ", error);
        this.onError("Oops! Something went wrong");
      }
    );
  }

  closeDialog()
  {
    this.dialogRef.close();
  }

  onSuccess(message: string)
  {
    this.snackbar.open(message, 'Got it', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  onError(message: string)
  {
    this.snackbar.open(message, 'Dismiss', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

}
