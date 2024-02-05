import { Component, Input } from '@angular/core';
import { SmallCard } from '../../models/SmallCard';

@Component({
  selector: 'small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input() smallCard!: SmallCard
}
