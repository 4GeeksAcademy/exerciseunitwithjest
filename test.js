const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('One euro should be 1.206 dollars', function() {
    const euros = 3.5;
    const dollars = fromEuroToDollar(euros);
    const expected = euros * 1.2;
    expect(dollars).toBe(expected);
});

test('One dollar should be 127.9 yen', function() {
    const dollars = 2.5;
    const yen = fromDollarToYen(dollars);
    const expected = dollars * 127.9;
    expect(yen).toBe(expected);
});

test('One yen should be 0.8 pounds', function() {
    const yen = 3;
    const pound = fromYenToPound(yen);
    const expected = yen * 0.8;
    expect(pound).toBe(expected);
});
