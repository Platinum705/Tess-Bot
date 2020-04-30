
class Reminder 
{ 
  constructor(timeString, callback)
  {
       this.remindHandler = callback;
       let timeArray = timeString.split(':');
       this.hours = parseInt(timeArray[0]);
       this.minutes = parseInt(timeArray [1]);
       this.updateTimer();
}

updateTimer()
{
    let now = new Date();

   let remindTime = new Date();

   remindTime.setHours(this.hours);
   remindTime.setMinutes(this.minutes);

   if(now.getTime() == remindTime.getTime()) this.remindHandler();
   if(now >= remindTime ) remindTime.setDate(remindTime.getDate() + 1);

console.log('time to reminder: ' + (remindTime - now));

setTimeout(this.updateTimer.bind(this), remindTime - now);
}
}
let reminder = new Reminder('11:15', () => {

});
