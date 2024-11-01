import { AfterContentChecked, AfterContentInit, afterNextRender, afterRender, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: 'lifecyle-try',
  template: `<button (click)="reverseState()">{{boolState}}</button>`
})
export class LifecyleTry implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  public boolState: boolean = false;

  public reverseState() {
    this.boolState =!this.boolState;
  }

  public state: string = 'not yet started!';
  constructor() {
    console.log(this.state);
    this.state = 'creation phase';
    console.log(this.state);

    afterRender(() => {
      this.state ='after render phase';
      console.log(this.state)
    });

    afterNextRender(() => {
      this.state ='after next render phase';
      console.log(this.state)
    })
  }
  ngAfterViewChecked(): void {
    this.state = 'after view checked';
    console.log(this.state);
  }
  ngAfterContentChecked(): void {
    this.state = 'after content checked';
    console.log(this.state);
  }
  ngAfterViewInit(): void {
    this.state = 'after view initialization';
    console.log(this.state);
  }
  ngAfterContentInit(): void {
    this.state = 'after content initialization';
    console.log(this.state);
  }
  ngDoCheck(): void {
    this.state = 'state do checked';
    console.log(this.state);
  }
  ngOnChanges(): void {
    this.state = 'changes detected';
    console.log(this.state);
  }

  ngOnDestroy(): void {
    this.state = 'destroyed';
    console.log(this.state);
  }

  ngOnInit(): void {
    this.state = 'initialization phase';
    console.log(this.state);
  }

}
