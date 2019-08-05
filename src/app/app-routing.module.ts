import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EntityDetailComponent} from './components/entity-detail/entity-detail.component';
import {HomeComponent} from './components/home/home.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {ContactComponent} from './components/static-pages/contact/contact.component';
import {ImprintComponent} from './components/static-pages/imprint/imprint.component';
import {PrivacyComponent} from './components/static-pages/privacy/privacy.component';
import {WizardComponent} from './components/wizard/wizard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Kompakkt',
        },
    },
    {
        path: 'wizard',
        component: WizardComponent,
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
    },
    {
        path: 'imprint',
        component: ImprintComponent,
        data: {
            title: 'Imprint',
        },
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
        data: {
            title: 'Privacy',
        },
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {
            title: 'Contact',
        },
    },
    {
        path: 'entity/:id',
        component: EntityDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
