import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './data/dummy-users';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  userId = '';

  onSelectUser(id: string) {
    this.userId = DUMMY_USERS.find((user) => user.id === id)?.id || '';
  }

  // get selectedUser() {
  //   return this.users.find((user) => user.id === this.selectedUserId);
  // }
}
