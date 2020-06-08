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
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'a',
    loadChildren: () => import('./a/a.module').then( m => m.APageModule)
  },
  {
    path: 'b',
    loadChildren: () => import('./b/b.module').then( m => m.BPageModule)
  },
  {
    path: 'c',
    loadChildren: () => import('./c/c.module').then( m => m.CPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
