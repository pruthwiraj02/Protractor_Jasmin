

describe('Enter name feature', function()
{
  browser.ignoreSynchronization = True;//for non angular app
  browser.manage().timeouts().implicitlyWait(50000)
  
  it('sendkeys operation', function() {
		browser.get('https://google.com/');
		browser.sleep(7000)
		element(by.name('noSuchNameIsThere')).sendKeys("hello")
    });   
});


