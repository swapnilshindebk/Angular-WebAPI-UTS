
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from '../users/users-list.component';

// Routes
const routes: Routes = [
    {path: '', component: UsersListComponent},
    {path: 'users', component: UsersListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RootRouterModule
{}
