import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent } from './componentes/recipe-list/recipe-list.component';
//import { SearchComponent } from './componentes/search/search.component';
//import { ArtistComponent } from './componentes/artist/artist.component';

const APP_MODULES: Routes = [
    { path: 'home', component: RecipeListComponent },
    //    { path: 'buscar', component: SearchComponent },
    //    { path: 'artist/:id', component: ArtistComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_MODULES, { useHash: true });
