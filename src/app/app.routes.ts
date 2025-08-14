
import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { NetworkPage } from './network-page/network-page';
import { IframePage } from './iframe-page/iframe-page';
import { FilePage } from './file-page/file-page';
import { ResponsivePage } from './responsive-page/responsive-page';
import { PageReloadChallengePage } from './page-reload-challenge-page/page-reload-challenge-page';

export const routes: Routes = [
		{ path: 'login', component: LoginPage },
	{ path: 'network', component: NetworkPage },
	{ path: 'iframe', component: IframePage },
	{ path: 'file', component: FilePage },
	{ path: 'responsive', component: ResponsivePage },
	{ path: 'page-reload-challenge', component: PageReloadChallengePage },
];
