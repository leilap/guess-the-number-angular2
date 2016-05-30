import { Component } from '@angular/core';
import { GuessedNumber } from "../models/guessed-number.model";
import { GuessNumber } from "./guess-number.component";

describe("guess-number-component", () => {
    var guessNumber = new GuessNumber();
    describe('initialiseGame method', () => {
        it('sets the coputer generated number to 5', () => {
            guessNumber.initialiseGame(5);
            expect(guessNumber.generatedNumber).toEqual(5);
        })
    })

    describe('verify method - the answer is lower:', () => {
        it('displays: Your guess is lower! Given that the generated number is 5 and the guessed number is 4.', () => {
            guessNumber.initialiseGame(5);
            let guessedNumber: GuessedNumber = {
                value: 4
            }
            guessNumber.gussedNumber = guessedNumber;
            guessNumber.verify();

            expect(guessNumber.message).toEqual('Your guess is lower!')
        });
        it('increments the count by 1', () => {
            expect(guessNumber.count).toEqual(1);
        });
    });

    describe('verify method - the answer is higher:', () => {
        it('displays: Your guess is higher! Given that the generated number is 4 and the guessed number is 6.', () => {
            guessNumber.initialiseGame(4);
            let guessedNumber: GuessedNumber = {
                value: 6
            }
            guessNumber.gussedNumber = guessedNumber;
            guessNumber.verify();

            expect(guessNumber.message).toEqual('Your guess is higher!')
        });
        it('increments the count by 1', () => {
            expect(guessNumber.count).toEqual(1);
        });
    });

    describe('verify method - the answer is correct:', () => {
        it('displays: Your guess is correct! Given that the generated number is 2 and the guessed number is 2.', () => {
            guessNumber.initialiseGame(2);
            let guessedNumber: GuessedNumber = {
                value: 2
            }
            guessNumber.gussedNumber = guessedNumber;
            guessNumber.verify();

            expect(guessNumber.message).toEqual('Your guess is correct!')
        });
        it('increments the count by 1', () => {
            expect(guessNumber.count).toEqual(1);
        });
    });

    describe('verify method - no answer is provided:', () => {
        it('displays: Try again! Given that the generated number is 1 and the guessed number is empty.', () => {
            guessNumber.initialiseGame(2);
            let guessedNumber: GuessedNumber = {
                value: +""
            }
            guessNumber.gussedNumber = guessedNumber;
            guessNumber.verify();

            expect(guessNumber.message).toEqual('Try again!')
        });
        it('does not increment the count by 1', () => {
            expect(guessNumber.count).toEqual(0);
        });
    });
})
