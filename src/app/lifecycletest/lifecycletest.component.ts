import { Component, OnChanges, OnDestroy, OnInit, AfterViewChecked, DoCheck, SimpleChanges, Input, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewChecked {


  @Input()
  title!: string;

  @ViewChild(RatingComponent)
  rating!: RatingComponent;

  timer!: ReturnType<typeof setInterval>;

  constructor() { }

  ngAfterViewChecked(): void {
    console.log('on after view checked');
    console.log(this.rating);
  }
  ngDoCheck(): void {
    console.log('on do check');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
    clearInterval(this.timer);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('on init');
    console.log(this.rating);
    this.timer = setInterval(() => console.log(new Date()), 1000);
  }


}
