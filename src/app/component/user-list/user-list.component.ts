import { Component } from '@angular/core';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[];

  constructor() {
    this.users = [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        description: "Flowers, with their vibrant hues and delicate forms, speak a language all their own. A single red rose whispers of passionate love, while a bouquet of lilies conveys purity and innocence. Sunflowers, with their cheerful faces turned towards the sky, radiate optimism, while a sprig of lavender evokes feelings of calmness and tranquility."
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        description: "The old library held a hushed reverence, an air thick with the weight of centuries. Sunlight streamed through stained-glass windows, casting colorful jewels of light across the worn wooden floorboards. Towering shelves crammed with leather-bound tomes reached toward the high ceiling, each book a portal to a different world. A faint scent of paper and dust hung in the air, a whisper of forgotten tales."
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        description: "The city never truly sleeps. Even at the witching hour, a symphony of sounds plays its nocturnal tune. Distant sirens wail like mournful wolves. Cars rumble by, their engines a low growl against the asphalt. A lone saxophone player pours his heart out on a street corner, his music a beacon in the darkness. Up above, a jet plane screams across the inky sky, leaving a fleeting trail of white. "
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        description: "The dryer hummed contentedly, its warm breath billowing out the vent. Inside, a jumble of clothes tumbled haphazardly. Sarah, with a sigh of relief, emptied the machine. Folding each item with practiced ease, she paused. A sock. One, lone sock. A navy blue cotton blend, its mate nowhere in sight. Where could it be? Had it escaped into the dryer's labyrinthine depths, never to be seen again? "
      }
    ];
  }
}
