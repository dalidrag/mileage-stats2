import { MileageStatsPage } from './app.po';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;

describe('mileage-stats App', function() {
  let page: MileageStatsPage;

  beforeEach(() => {
    page = new MileageStatsPage();
  });

  it('should just work with no bugs', (done) => {
    let success = true;
    // page.setScreenSize(800, 1080);
    page.setScreenSize(1920, 1080);
    page.navigateTo();
    page.sleep().then(() => {
    	return page.performTest();
    }).then(() => {
    	return page.sleep();
    }).then(() => {
    	page.setScreenSize(1100, 825);
    	page.navigateTo();
    	return page.sleep();
    }).then(() => {
    	return page.performTest();
    }).then(() => {
    	page.setScreenSize(1280, 960);
    	page.navigateTo();
    	return page.sleep();
    }).then(() => {
    	return page.performTest();
    }).then(() => {
    	page.setScreenSize(1920, 1080);
    	page.navigateTo();
    	return page.sleep();
    }).then(() => {
    	return page.performTest();
    }).then(() => {
    	page.setScreenSize(2600, 1500);
    	page.navigateTo();
    	return page.sleep();
    }).then(() => {
    	return page.performTest();
    }).then(() => {
    	expect(success).toBe(true);	// we should simply reach this point without errors
    	done();
    })
  });
});