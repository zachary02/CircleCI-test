const { sayHelloTo, sayHiTo, sayYetTo, sayByeTo, sayGoodTo, sayHappyTo, sayNiceTo } = require('./sketch');

//hello
function helloTest() {
  expect(sayHelloTo("zachary")).toBe("Hello, zachary!");
}

test('sayHelloTo function exists', () => {
  expect(sayHelloTo).toBeDefined();
});

test('sayHelloTo zachary should be Hello, zachary!', () => {
  helloTest();
});

//hi
function hiTest() {
  expect(sayHiTo("zachary")).toBe("Hi, zachary!");
}

test('sayHiTo function exists', () => {
  expect(sayHiTo).toBeDefined();
});

test('sayHiTo zachary should be Hi, zachary!', () => {
  hiTest();
});

//yet
function yetTest() {
  expect(sayYetTo("zachary")).toBe("Yet, zachary!");
}

test('sayYetTo function exists', () => {
  expect(sayYetTo).toBeDefined();
});

test('sayYetTo zachary should be Yet, zachary!', () => {
  yetTest();
});

//bye
function byeTest() {
  expect(sayByeTo("zachary")).toBe("Bye, zachary!");
}

test('sayByeTo function exists', () => {
  expect(sayByeTo).toBeDefined();
});

test('sayByeTo zachary should be Bye, zachary!', () => {
  byeTest();
});

//good
function goodTest() {
  expect(sayGoodTo("zachary")).toBe("Good, zachary!");
}

test('sayGoodTo function exists', () => {
  expect(sayGoodTo).toBeDefined();
});

test('sayGoodTo zachary should be Good, zachary!', () => {
  goodTest();
});



//happy
function happyTest() {
  expect(sayHappyTo("zachary")).toBe("Happy, zachary!");
}

test('sayHappyTo function exists', () => {
  expect(sayHappyTo).toBeDefined();
});

test('sayHappyTo zachary should be Happy, zachary!', () => {
  happyTest();
});

//nice
function niceTest() {
  expect(sayNiceTo("zachary")).toBe("Nice, zachary!");
}

test('sayNiceTo function exists', () => {
  expect(sayNiceTo).toBeDefined();
});

test('sayNiceTo zachary should be Nice, zachary!', () => {
  niceTest();
});


