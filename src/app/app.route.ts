import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ChatGuard } from './guards/chat.guard';

const routes: Routes = [
    { path: 'callback', component: CallbackComponent },
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatComponent,canActivate:[ChatGuard] },
    { path: '**', pathMatch:'full', redirectTo: 'chat' }
];

export const appRouting = RouterModule.forRoot(routes);