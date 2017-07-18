import { browser, element, by } from 'protractor';

export class MileageStatsPage {
  navigateTo() {
    return browser.get('/');
  }

	setScreenSize(width: number, height:number) {
		browser.driver.manage().window().setSize(width, height);
	}
  sleep() {
  	return browser.sleep(3000);
  }

  performTest() {
		this.clickAddCarButton().then(() => {
			return this.clickDashboardLink();
		}).then(() => {
			return this.clickCarCard();
		}).then(() => {
			return this.clickEditCar();
		}).then(() => {
			return this.clickFillUpsTab();
		}).then(() => {
			return this.selectFillUp();
		}).then(() => {
			return this.clickEditFillUp();
		}).then(() => {
			return this.clickAddFillUp();
		}).then(() => {
			return this.clickRemindersTab();
		}).then(() => {
			return this.selectReminder();
		}).then(() => {
			return this.clickEditReminder();
		}).then(() => {
			return this.clickAddReminder();
		}).then(() => {
			return this.clickCarDetailsTab();
		}).then(() => {
			return this.clickRemindersTab();
		}).then(() => {
			return this.clickFillUpsTab();
		})
		.catch((error) => {
			let message = error.message || error;
			console.log('Error' + message);
		}) 
  }

  clickAddCarButton() {
  	element(by.css('.add-car-button')).click();
  	return this.sleep();
  }
	clickDashboardLink() {
  	element(by.css('#menu-dashboard')).click();
  	return this.sleep();
	}
  clickCarCard() {
  	element(by.css('.avatar')).click();
  	return this.sleep();
  }
	clickEditCar() {
  	element(by.css('#edit-car')).click();
  	return this.sleep();
	}
	clickFillUpsTab() {
  	element(by.css('#fill-ups-tab')).click();
  	return this.sleep();
	}
	selectFillUp() {
  	element(by.css('.fill-ups-list-entry')).click();
  	return this.sleep();
	}
	clickEditFillUp() {
  	element(by.css('#edit-fill-up')).click();
  	return this.sleep();
	}
	clickAddFillUp() {
  	element(by.css('#add-fill-up')).click();
  	return this.sleep();
	}
	clickRemindersTab() {
  	element(by.css('#reminders-tab')).click();
  	return this.sleep();
	}
	selectReminder() {
  	element(by.css('.reminders-list-entry')).click();
  	return this.sleep();
	}
	clickEditReminder() {
  	element(by.css('#edit-reminder')).click();
  	return this.sleep();
	}
	clickAddReminder() {
  	element(by.css('#add-reminder')).click();
  	return this.sleep();
	}
	clickCarDetailsTab() {
		element(by.css('#car-tab')).click();
		return this.sleep();
	}
}