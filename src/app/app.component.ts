import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { HeaderComponent } from "./component/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserListComponent, HeaderComponent, RouterLink]
})
export class AppComponent {
  title = 'user-app';
}
