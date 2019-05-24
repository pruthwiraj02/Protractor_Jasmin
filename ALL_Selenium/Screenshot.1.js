describe('Screenshot in protractor', function()
{
  browser.ignoreSynchronization = true;//for non angular app
  browser.manage().timeouts().implicitlyWait(50000)
  
  it('sendkeys operation', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.sleep(4000)
		browser.takeScreenshot().then(function (png) {
			var stream = createWriteStream("exception.png");
			stream.write(new Buffer(png, 'base64'));
			stream.end();
    });   
});
});