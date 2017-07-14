import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Reminder } from '../../../common/reminder';

@Component({
  selector: 'app-overdue-reminders',
  templateUrl: './overdue-reminders.component.html',
  styleUrls: ['./overdue-reminders.component.css']
})
export class OverdueRemindersComponent implements OnInit, OnChanges {

  @Input()
	reminders: Reminder[];
	extraReminders: number = 0;
	overdueReminders: Reminder[];
	pluralize:string = 'reminders';


  ngOnInit() {
  	this.overdueReminders = [];

    this.setOverdueReminders();
  }

	ngOnChanges(changes: SimpleChanges) {
    this.reminders = changes.reminders.currentValue;

    this.setOverdueReminders();
  }

	/**
	  * Filters reminders for the car to show only over-due ones
	  *
	  * @method setOverdueReminders
	  */
	  setOverdueReminders(): void {
	    this.overdueReminders = this.reminders.filter(reminder => {
	      return Date.now() > new Date(reminder.date).valueOf();
	    });
	    this.extraReminders = 0;
	    if (this.overdueReminders.length > 2) {
	      this.extraReminders = this.overdueReminders.length - 2;
	      if (this.extraReminders === 1)
	        this.pluralize = 'reminder';
	      else
	        this.pluralize = 'reminders';
	      this.overdueReminders = this.overdueReminders.slice(0, 2);  // Only two overdue reminders to show
	    }
	  }
}
