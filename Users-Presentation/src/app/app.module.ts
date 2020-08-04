import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RootRouterModule} from './routing/root-router.module';
import { AddUpdateUserComponent } from './users/addupdate-user.component';

// Services
import {UsersService} from './services/users.service';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ConfirmDialogComponent } from './shared/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    HeaderComponent,
    FooterComponent,
    AddUpdateUserComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RootRouterModule,
    ReactiveFormsModule,

    // Angular Material
    BrowserAnimationsModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule,
    MatSnackBarModule, MatTableModule, MatDialogModule, MatIconModule,
    MatToolbarModule, MatRadioModule, MatSortModule, MatPaginatorModule
  ],
  entryComponents: [AddUpdateUserComponent, ConfirmDialogComponent],
  providers: [UsersService, 
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
