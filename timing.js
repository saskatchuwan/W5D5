class Clock {
  constructor() {
    // 1. Create a Date object.
    this.date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    // 3. Call printTime.
    // this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    // _tick();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    setInterval(() => {
      if (this.seconds === 59 && this.minutes !== 59) {
        this.seconds = 0;
        this.minutes++;
      } else if (this.seconds === 59 && this.minutes === 59 && this.hours !== 59) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours++;
      } else if (this.seconds === 59 && this.minutes === 59 && this.hours === 59) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;  
      } else {
        this.seconds++;
      }

      this.printTime();
    }, 1000);
    // 2. Call printTime.
    
  }
}

const clock = new Clock();