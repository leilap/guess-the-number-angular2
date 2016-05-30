"use strict";
var guess_number_component_1 = require("./guess-number.component");
describe("guess-number-component", function () {
    var guessNumber = new guess_number_component_1.GuessNumber();
    describe('initialiseGame method', function () {
        it('sets the coputer generated number to 5', function () {
            guessNumber.initialiseGame(5);
            expect(guessNumber.generatedNumber).toEqual(5);
        });
    });
    describe('verify method - the answer is lower:', function () {
        it('displays: Your guess is lower! Given that the generated number is 5 and the guessed number is 4.', function () {
            guessNumber.initialiseGame(5);
            var guessedNumber = {
                value: 4
            };
            guessNumber.gussedNumber = guessedNumber;
            guessNumber.verify();
            expect(guessNumber.message).toEqual('Your guess is lower!');
        });
        it('increments the count by 1', function () {
            expect(guessNumber.count).toEqual(1);
        });
    });
    describe('verify method - the answer is higher:', function () {
        it('displays: Your guess is higher! Given that the generated number is 4 and the guessed number is 6.', function () {
            guessNumber.initialiseGame(4);
            var guessedNumber = {
                value: 6
            };
            guessNumber.gussedNumber = guessedNumber;
            guessNumber.verify();
            expect(guessNumber.message).toEqual('Your guess is higher!');
        });
        it('increments the count by 1', function () {
            expect(guessNumber.count).toEqual(1);
        });
    });
    describe('verify method - the answer is correct:', function () {
        it('displays: Your guess is correct! Given that the generated number is 2 and the guessed number is 2.', function () {
            guessNumber.initialiseGame(2);
            var guessedNumber = {
                value: 2
            };
            guessNumber.gussedNumber = guessedNumber;
            guessNumber.verify();
            expect(guessNumber.message).toEqual('Your guess is correct!');
        });
        it('increments the count by 1', function () {
            expect(guessNumber.count).toEqual(1);
        });
    });
    describe('verify method - no answer is provided:', function () {
        it('displays: Try again! Given that the generated number is 1 and the guessed number is empty.', function () {
            guessNumber.initialiseGame(2);
            var guessedNumber = {
                value: +""
            };
            guessNumber.gussedNumber = guessedNumber;
            guessNumber.verify();
            expect(guessNumber.message).toEqual('Try again!');
        });
        it('does not increment the count by 1', function () {
            expect(guessNumber.count).toEqual(0);
        });
    });
});
//# sourceMappingURL=guess-number-component.spec.js.map