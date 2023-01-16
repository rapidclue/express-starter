const helper = require('../app/helper');

test('it returns default greeting', () => {
    expect(helper.sayHello()).toBe('Hello World');
});

test('it returns greetings with provided name', () => {
    expect(helper.sayHello('Teamway')).toBe('Hello Teamway');
});