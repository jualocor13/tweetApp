import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './features/timeline/timeline.component';


const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
		  import('./features/auth/auth.module').then((m) => m.AuthModule),
	  },
	  {
		path: 'dashboard',
		loadChildren: () =>
		  import('./features/dashboard/dashboard.module').then(
			(m) => m.DashboardModule
		  ),
	  },
	  {
		path: 'timeline',
		component: TimelineComponent
	  },
	  {
		path: '**',
		redirectTo: '',
		pathMatch: 'full',
	  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
