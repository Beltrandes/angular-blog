import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { BigCard } from '../../models/BigCard';
import { SmallCard } from '../../models/SmallCard';

@Component({
  selector: 'home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  bigCard1: BigCard = {
    photoCover: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*DTy8tlNHXGc0g4sB',
    date: 'January 24, 2024',
    cardTitle: 'Nova versão do angular já tem suporte a longo prazo',
    cardDescription: 'A nova versão do angular é um marco para a tecnologia, sendo incluídos muitos recursos nativos e novas sintaxes mais legíveis e funcionais para controle de fluxo de componentes e estruturas'
  }

  smallCards: SmallCard[] = [

    {
      photoCover: 'https://www.apple.com/newsroom/images/media/Apple-WWCD23-Vision-Pro-glass-230605_big.jpg.large.jpg',
      date: ' 01 de Fevereiro, 2024',
      cardDescription: 'Apple lança seu novo produto inovador de realidade mista, o Apple Vision Pro'
    },
    {
      photoCover: 'https://remsoft.com.br/wp-content/uploads/2023/08/copilot-ga-1024x538.png',
      date: '20 de Janeiro, 2024',
      cardDescription: 'Github Copilot recebe nova versão com melhorias em modelo de linguagem'
    },
    {
      photoCover: 'https://www.cienciaedados.com/wp-content/uploads/2023/04/Por-Que-o-ChatGPT-Nao-e-Tao-Inteligente-Quanto-Muitos-Acreditam.jpg',
      date: '18 de Janeiro, 2024',
      cardDescription: 'OpenAI lança aplicativo nativo para celulares com funções exclusivas para plataforma'
    },

  ]

  smallPhotoCover: string = ''
  smallCardDescription: string = ''
}
