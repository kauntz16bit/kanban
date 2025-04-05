import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, ColumnComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  columns = [
    { title: 'To Do', cards: ['Exemplo de tarefa'] },
    { title: 'Doing', cards: ['Implementar column component'] },
    { title: 'Done', cards: ['Criar estrutura inicial'] }
  ];
}
