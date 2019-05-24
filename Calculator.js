describe('Calculator test', function() {
	
	var Firstnumber=element(by.model('first'));
	var Secondnumber=element(by.model('second'));
	var Go=element(by.id('gobutton'));
	var Result=element(by.className('ng-binding'));
	var history = element.all(by.repeater('result in memory'));

	beforeEach(function() {
		browser.get('http://juliemr.github.io/protractor-demo/')
		
	})
	
	function add(a,b)
	{
		Firstnumber.sendKeys(a);
		Secondnumber.sendKeys(b);
		Go.click()
	}
	
	
	it('Add numbers', function() {
		add(2,3);
		add(2,3);
		add(3,4);

		  expect(history.count()).toEqual(3);
		
    })
    
	

	
})