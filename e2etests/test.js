const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', async () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();
    console.log(actualTitle);

    expect(actualTitle).to.eql('Todo List');
  });
  it('Should allow me to create a Todo', async () => {
    const todoText = 'Get better at testing';
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });
});
