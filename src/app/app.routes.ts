import { Routes } from '@angular/router';
import {CallbackComponent} from "./components/callback/callback";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'employees', component: EmployeeListComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
