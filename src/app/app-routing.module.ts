import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    // {
    //   path: 'company',
    //   loadChildren: () =>
    //     import('../company-page/company.module').then((m) => m.CompanyModule),
    // },
    // {
    //   path: 'department',
    //   loadChildren: () =>
    //     import('../department-page/department.module').then((m) => m.DepartmentModule),
    // },
  ],
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }


