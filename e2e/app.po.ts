import { browser, element, by } from 'protractor';

export class MileageStatsPage {
  navigateTo() {
    return browser.get('/landing/signIn');
  }

	setScreenSize(width: number, height:number) {
		browser.driver.manage().window().setSize(width, height);
	}
  sleep() {
  	return browser.sleep(3000);
  }

  performTest() {
  	this.enterUserName().then(() => 
  		this.clickSignInButton()	
  	).then(() =>
  		this.clickAddCarButton()
  	).then(() => 
			this.clickDashboardLink()
		).then(() => 
			this.clickCarCard()
		).then(() => 
			this.clickEditCar()
		).then(() => 
			this.clickFillUpsTab()
		).then(() => 
			this.selectFillUp()
		).then(() => 
			this.clickEditFillUp()
		).then(() => 
			this.clickAddFillUp()
		).then(() => 
			this.clickRemindersTab()
		).then(() => 
			this.selectReminder()
		).then(() => 
			this.clickEditReminder()
		).then(() => 
			this.clickAddReminder()
		).then(() => 
			this.clickCarDetailsTab()
		).then(() => 
			this.clickRemindersTab()
		).then(() => 
			this.clickFillUpsTab()
		)
		.catch((error) => {
			let message = error.message || error;
			console.log('Error' + message);
		}) 
  }

  enterUserName() {
  	element(by.css('.username')).sendKeys('sample');
  	return this.sleep();
  }

  clickSignInButton() {
  	element(by.css('.green-button')).click();
  	return this.sleep();
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