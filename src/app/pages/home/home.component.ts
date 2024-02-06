import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { Card } from '../../models/Card';
import * as fakeData from '../../data/fakeData';

@Component({
  selector: 'home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cards: Card[] = fakeData.fakeBigCards;
}
