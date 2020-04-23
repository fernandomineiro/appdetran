import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'terceira',
    loadChildren: () => import('./terceira/terceira.module').then( m => m.TerceiraPageModule)
  },
  {
    path: 'quarta',
    loadChildren: () => import('./quarta/quarta.module').then( m => m.QuartaPageModule)
  },
  {
    path: 'quinta',
    loadChildren: () => import('./quinta/quinta.module').then( m => m.QuintaPageModule)
  },
  {
    path: 'sexta',
    loadChildren: () => import('./sexta/sexta.module').then( m => m.SextaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
