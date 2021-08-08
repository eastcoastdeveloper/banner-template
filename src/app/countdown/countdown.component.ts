  import {
  AfterViewInit,
  Component
} from "@angular/core";

@Component({
  selector: "countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"]
})
export class CountdownComponent implements AfterViewInit {

  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;

  ngAfterViewInit() {
    this.myTimer()
  }

  myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2021, 11, 31);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    document.getElementById("days").innerText = this.days;
    document.getElementById("hours").innerText = this.hours;
    document.getElementById("mins").innerText = this.minutes;
    document.getElementById("seconds").innerText = this.seconds;

    setInterval(this.myTimer, 1000);
  }
    
}
