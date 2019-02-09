describe('test with firefox without angular locators',function () {

    it('test',function () {

        browser.get('https://qa-deodata.transportsystems.co/#!/login');
        element(by.xpath("//input[@type='email']")).sendKeys('a.ospina+client@transportsystems.co');
        element(by.xpath("//input[@type='password']")).sendKeys('Ts12345*');
        element(by.xpath("//button")).click();
        browser.sleep(5000)

    })

})