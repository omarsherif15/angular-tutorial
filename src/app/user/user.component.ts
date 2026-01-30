import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

interface User{
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [CardComponent, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({required : true}) user! : User

  get avatarUrl() : string {
    return `assets/users/${this.user.avatar}`;
  }
}
