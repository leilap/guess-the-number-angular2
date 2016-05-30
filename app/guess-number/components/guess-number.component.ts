import { Component, Input, OnInit } from '@angular/core';
import { GuessedNumber } from '../models/guessed-number.model';

@Component({
    selector: 'guess-number',
    templateUrl: './app/guess-number/templates/guess-number.template.html'
})
export class GuessNumber implements OnInit {
    gussedNumber = new GuessedNumber(null);
    generatedNumber: number;
    message: string;
    count: number;
    low: boolean;
    high: boolean;
    successful: boolean;
    error: boolean;

    resetHints() {
        this.low = false;
        this.high = false;
        this.successful = false;
        this.error = false;
        this.message = null;
    }

    private generateRandomNumber() {
        return Math.floor(Math.random() * 10 + 1);
    }

    reset() {
        var randomNumber = this.generateRandomNumber();
        this.initialiseGame(randomNumber);
    }

    initialiseGame(randomNumber) {
        this.resetHints()
        this.count = 0;
        this.gussedNumber.value = null;
        this.generatedNumber = randomNumber;
        console.log(this.generatedNumber);
    }

    ngOnInit() {
        this.reset();
    }

    commonVerificationActions() {
        this.resetHints();
        this.count = this.count + 1;
    }

    //presentation logic
    verify() {
        if (this.gussedNumber.value != null && this.gussedNumber.value != +"") {
            if (this.gussedNumber.value > this.generatedNumber) {
                this.commonVerificationActions()
                this.message = "Your guess is higher!";
                this.high = true;
            }
            else if (this.gussedNumber.value < this.generatedNumber) {
                this.commonVerificationActions()
                this.message = "Your guess is lower!";
                this.low = true;
                console.log(this.gussedNumber.value);
            }

            else if (this.gussedNumber.value = this.generatedNumber) {
                this.commonVerificationActions()
                this.message = 'Your guess is correct!'
                this.successful = true;
            }

            else {
                this.commonVerificationActions()
                this.message = 'Try again!';
                this.error = true;
            }
        }
        else {
            this.resetHints();
            this.message = 'Try again!';
            this.error = true;
        }
    }
}