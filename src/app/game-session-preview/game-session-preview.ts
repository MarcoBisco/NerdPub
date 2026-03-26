import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { GameSession } from '../model/entities';

@Component({
  selector: 'app-game-session-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-session-preview.html',
  styleUrl: './game-session-preview.css',
})
export class GameSessionPreview {
  gameSession = input.required<GameSession>();

  // Evento per gestire il click sulla card (es. per aprire il dettaglio)
  selectSession = output<GameSession>();

  onDetailsClick() {
    this.selectSession.emit(this.gameSession());
  }
}