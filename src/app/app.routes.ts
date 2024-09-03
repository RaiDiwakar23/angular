import { Routes } from '@angular/router';
import { FirstComp } from './components/first.component';
import { SecondComponent } from './components/second/second.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ObjservableComponent } from './components/objservable/objservable.component';

export const routes: Routes = [
  { path: '', component: FirstComp },
  {
    path: 'second',
    component: SecondComponent,
  },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'observable', component: ObjservableComponent },
];
