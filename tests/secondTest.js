const {Builder, By, Key} = require("selenium-webdriver");
//const assert = require("assert");
var should = require("chai").should();

//describe block
describe("Add another todo tests",function(){

    //it block
    it("successfully adds another todo to application", async function(){
        
    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("http://lambdatest.github.io/sample-todo-app/")

    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium",Key.RETURN);

    //assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value
    });

    //assert using node assertion
    //assert.strictEqual(todoText,"Learn Selenium");

    //assert using chai should
    todoText.should.equal("Learn Selenium")

    await driver.quit();
    });

    it("Adding a new test for reporting which should fail", async function(){
        
        let driver = await new Builder().forBrowser("firefox").build();
    
        await driver.get("http://lambdatest.github.io/sample-todo-app/")
    
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium",Key.RETURN);
    
        //assert
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
            return value
        });
    
        //assert using node assertion
        //assert.strictEqual(todoText,"Learn Selenium");
    
        //assert using chai should
        todoText.should.equal("Learn JavaScript");
    
        await driver.quit();
        });
    
});

    //we need to launch the browser then we need to navigate to our application then we need to add a to-do then we will close the browser

    
