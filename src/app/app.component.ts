import { getLocaleDayNames } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('container', { static: false }) container: ElementRef;

  data: any = [
    {
      id: 'one',
      content: '5 Days 6 Nights in Maui'
    },
    {
      id: 'two',
      content: "<span class='noBold'>with</span> FREE AIR"
    },
    {
      id: 'three',
      content: ''
    },
    {
      id: 'four',
      content: ''
    },
    {
      id: 'five',
      content: 'Expires DEC 31, 2021'
    },
    {
      id: 'six',
      content: "<span id='daysLeft'></span> <span id='plural'></span>"
    },
    {
      id: 'seven',
      content: '— Reserve Today —'
    },
    {
      id: 'eight',
      content: 'Easily Change Banner<br>with JSON!'
    },
    {
      id: 'nine',
      content: 'LEARN MORE'
    },
    {
      id: 'ten',
      content: '<p>Maui Vacation<br>Package</p>'
    }
  ];
  daysDiff: number;
  timeDiff: number;
  targetD: any;
  daysInMonth: any;
  today: any;
  currentD: any;
  countdownTimer: any = 'calculating...';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    for (var i = 0; i < this.data.length; i++) {
      this.container.nativeElement.innerHTML +=
        "<div id='" + this.data[i].id + "'>" + this.data[i].content + '</div>';
    }
  }
}
