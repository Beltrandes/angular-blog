import { fakeBigCards } from './../../data/fakeData';
import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Card } from '../../models/Card';
import * as fakeData from '../../data/fakeData';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MenuBarComponent, MenuTitleComponent, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  allCards: Card[] = fakeBigCards
  contentToLoad!: Card
  id: number | undefined
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
      this.loadContent()

    })
  }

  loadContent() {
    for (let i = 0; i < this.allCards.length; i++) {
      if (this.allCards[i].id === this.id) {
        this.contentToLoad = this.allCards[i]
      }
    }
  }

  previousCard(id: number) {
    if (id < 1) {
      throw new Error('Não existem mais cards')
    }
    if (id != 1) {
      this.router.navigate([`/content/${id - 1}`])

    }
    this.loadContent()

  }

  nextCard(id: number) {
    if (id > this.allCards.length - 1) {
      throw new Error('Não existem mais cards')
    }
    this.router.navigate([`/content/${id + 1}`])
  }


}
