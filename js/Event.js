class Event {
    constructor(eventID, homeTeam, visitorTeam, location, startDate, startTime, totalPossiblePoints) {
        this.eventID = eventID;
        this.homeTeam = homeTeam;
        this.visitorTeam = visitorTeam;
        this.location = location;
        this.startDate = startDate;
        this.startTime = startTime;
        this.totalPossiblePoints = totalPossiblePoints;
    }

    title() {
        return this.visitorTeam + ' @ ' + this.homeTeam; 
    }

    calendarDate() {
        //todo: making a good way to return a nicely formatted date.
        
    }

    //returns the amount of time until the event
    countDown() {
        var today = new Date();

        var timeDiff = Math.abs(this.startDate.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        console.log(diffDays);
        return diffDays;
    }

}