
import { Routes } from '@angular/router';
import { FlakyPage } from './flaky-page/flaky-page';
import { AsyncPage } from './async-page/async-page';
import { NetworkPage } from './network-page/network-page';
import { IframePage } from './iframe-page/iframe-page';
import { FilePage } from './file-page/file-page';
import { ResponsivePage } from './responsive-page/responsive-page';
import { ParallelPage } from './parallel-page/parallel-page';

export const routes: Routes = [
	{ path: 'flaky', component: FlakyPage },
	{ path: 'async', component: AsyncPage },
	{ path: 'network', component: NetworkPage },
	{ path: 'iframe', component: IframePage },
	{ path: 'file', component: FilePage },
	{ path: 'responsive', component: ResponsivePage },
	{ path: 'parallel', component: ParallelPage },
];
