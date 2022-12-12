import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table',
  templateUrl: './main.table.component.html',
  styleUrls: ['./main.table.component.scss']
})
export class MainTableComponent {

  public todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  public done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  public inProgress: string[] = [];
  public review: string[] = [];

  public itemTodo!: string;
  public itemInProgress!: string;
  public itemReview!: string;
  public itemDone!: string;
  public todoH2: string = 'To do';
  public inProgressH2: string = 'In Progress';
  public reviewH2: string = 'Review';
  public doneH2: string = 'Done';

  drop (event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addItemsInTodo(): void {
    this.todo.push(this.itemTodo)
    this.itemTodo = '';
  }

  addItemsInProgress(): void {
    this.inProgress.push(this.itemInProgress)
    this.itemInProgress = '';
  }

  addItemsInReview(): void {
    this.review.push(this.itemReview)
    this.itemReview = '';
  }

  addItemsInDone(): void {
    this.done.push(this.itemDone)
    this.itemDone = '';
  }

  deleteItemsTodo(value: string): void {
    const index = this.todo.indexOf(value);

    if (index >= 0) {
      this.todo.splice(index, 1);
    }
  }

  deleteItemsInProgress(value: string): void {
    const index = this.inProgress.indexOf(value);

    if (index >= 0) {
      this.inProgress.splice(index, 1);
    }
  }

  deleteItemsReview(value: string): void {
    const index = this.review.indexOf(value);

    if (index >= 0) {
      this.review.splice(index, 1);
    }
  }

  deleteItemsDone(value: string): void {
    const index = this.done.indexOf(value);

    if (index >= 0) {
      this.done.splice(index, 1);
    }
  }
}
