import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardService } from '../../services/board.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './main.table.component.html',
  styleUrls: ['./main.table.component.scss']
})
export class MainTableComponent implements OnInit{

  public todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  public done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  public inProgress: string[] = [];
  public review: string[] = [];
  public huy: any;
  public pizda: any;

  public itemTodo!: string;
  public itemInProgress!: string;
  public itemReview!: string;
  public itemDone!: string;
  public todoH2: string = 'To do';
  public inProgressH2: string = 'In Progress';
  public reviewH2: string = 'Review';
  public doneH2: string = 'Done';

  public constructor(
    public boardService: BoardService,
  ) { }

  ngOnInit() {
    this.getItems();
    // this.getItemsFromArray();
  }

  public getItemsFromArray() {
    // for (let items of this.huy){
    //   this.pizda = items.title;
    //   console.log(this.pizda);
    // }
  }

  public drop (event: CdkDragDrop<string[]>): void {
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

  public addItemsInTodo(title: string): void {
    title = this.itemTodo;
    this.boardService.addBoard({title: title, items_id: 1})
      .subscribe()
  }

  public addItemsInProgress(): void {
    this.inProgress.push(this.itemInProgress)
    this.itemInProgress = '';
  }

  public addItemsInReview(): void {
    this.review.push(this.itemReview)
    this.itemReview = '';
  }

  public addItemsInDone(): void {
    this.done.push(this.itemDone)
    this.itemDone = '';
  }

  public deleteItemsTodo(value: string): void {
    const index = this.todo.indexOf(value);

    if (index >= 0) {
      this.todo.splice(index, 1);
    }
  }

  public deleteItemsInProgress(value: string): void {
    const index = this.inProgress.indexOf(value);

    if (index >= 0) {
      this.inProgress.splice(index, 1);
    }
  }

  public deleteItemsReview(value: string): void {
    const index = this.review.indexOf(value);

    if (index >= 0) {
      this.review.splice(index, 1);
    }
  }

  public deleteItemsDone(value: string): void {
    const index = this.done.indexOf(value);

    if (index >= 0) {
      this.done.splice(index, 1);
    }
  }

  public getItems(): void {
    this.boardService.getBoard()
      .subscribe((huy: any) => {
        this.huy = huy.items;
        console.log(this.huy);
      })
  }
}
