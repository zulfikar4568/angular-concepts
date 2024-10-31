import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "sidebar",
  template: `
    <button (click)="toggleCollapse()">{{ isCollapsed }}</button>
    @if (isCollapsed) {
      <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/contact">Contact</a>
    </nav>
    }
  `,
  styles: [
    `
      nav {
        width: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 50vh;
        background-color: #45f3;
      }
      nav a {
        color: #343a40;
        text-decoration: none;
        padding: 10px;
      }
    `
  ]
})
export class SideBar {
  @Input({ required: true }) isCollapsed = false;
  @Output('logicForCollapse') collapsedEvent = new EventEmitter();

  toggleCollapse(): void {
    this.collapsedEvent.emit(this.isCollapsed);
  }
}

@Component({
  selector: 'parent-sidebar',
  template: `<sidebar [isCollapsed]="isCollapsed" (logicForCollapse)="collapsedFunction($event)"/>`
})
export class ParentSidebar {

  isCollapsed: boolean = false;

  collapsedFunction(event: boolean): void {
    this.isCollapsed = !event
  }
}
