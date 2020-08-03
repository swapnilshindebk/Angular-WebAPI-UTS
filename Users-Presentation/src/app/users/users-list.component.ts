import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import {User} from '../models/user';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUpdateUserComponent } from './addupdate-user.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'EmailID', 'IsAdmin', 'Status', 'Actions'];
  usersDataSource;
  newEmptyUser: User;

  // Snackbar Positioning
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // Sorting and Pagination
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usersService: UsersService, 
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<AddUpdateUserComponent>,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    
    // Create an Empty User
    this.createEmptyUserObject();

    // Get Users List on Component Initialization
    this.getUsersList();

  }

  createEmptyUserObject()
  {
    this.newEmptyUser = {
      UserID: 0,
      Name: '',
      EmailID: '',
      IsAdmin: true,
      MobileNumber: '',
      Status: 'Inactive'
    };
  }

  getUsersList()
  {
    this.usersService.getUsers().subscribe(
      (data) => {
        // console.log('Users List: ', data);

        // Bind the Material Table Data Source
        this.usersDataSource = new MatTableDataSource<User>(data as User[]);
        this.usersDataSource.paginator = this.paginator;
        this.usersDataSource.sort = this.sort;

      },
      (error) => {
        console.log(error);
      }
    );
  }

  openUserDialog(user)
  {
    //console.log("To be created/edited: ", user);

    // Open the AddUpdate Component in dialog and pass the data
    this.dialogRef = this.dialog.open(AddUpdateUserComponent, {
      data: {
        UserID: user.UserID,
        Name: user.Name,
        EmailID: user.EmailID,
        IsAdmin: user.IsAdmin,
        MobileNumber: user.MobileNumber
        // Status: user.Status
      }
    });

    // After closing the dialog
    this.dialogRef.afterClosed().subscribe(
      data => {
        // console.log("Updating Users List");
        this.getUsersList();
      }
    );

  }

  filterUsers(filterValue: string)
  {
    this.usersDataSource.filter = filterValue.trim().toLowerCase();
  }

}
