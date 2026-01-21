import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';
import { CardComponent } from "../shared/card/card.component";

const randonUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User{
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({required : true}) user! : User
  @Input({required : true}) isSelected! : boolean;
  @Output() userSelected = new EventEmitter<string>();

  get avatarUrl() : string {
    return `assets/users/${this.user.avatar}`;
  }

  onUserSelected() { 
    this.userSelected.emit(this.user.id);
   }
}
