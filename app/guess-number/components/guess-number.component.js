"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var guessed_number_model_1 = require('../models/guessed-number.model');
var GuessNumber = (function () {
    function GuessNumber() {
        this.gussedNumber = new guessed_number_model_1.GuessedNumber(null);
    }
    GuessNumber.prototype.resetHints = function () {
        this.low = false;
        this.high = false;
        this.successful = false;
        this.error = false;
        this.message = null;
    };
    GuessNumber.prototype.generateRandomNumber = function () {
        return Math.floor(Math.random() * 10 + 1);
    };
    GuessNumber.prototype.reset = function () {
        var randomNumber = this.generateRandomNumber();
        this.initialiseGame(randomNumber);
    };
    GuessNumber.prototype.initialiseGame = function (randomNumber) {
        this.resetHints();
        this.count = 0;
        this.gussedNumber.value = null;
        this.generatedNumber = randomNumber;
        console.log(this.generatedNumber);
    };
    GuessNumber.prototype.ngOnInit = function () {
        this.reset();
    };
    GuessNumber.prototype.commonVerificationActions = function () {
        this.resetHints();
        this.count = this.count + 1;
    };
    //presentation logic
    GuessNumber.prototype.verify = function () {
        if (this.gussedNumber.value != null && this.gussedNumber.value != +"") {
            if (this.gussedNumber.value > this.generatedNumber) {
                this.commonVerificationActions();
                this.message = "Your guess is higher!";
                this.high = true;
            }
            else if (this.gussedNumber.value < this.generatedNumber) {
                this.commonVerificationActions();
                this.message = "Your guess is lower!";
                this.low = true;
                console.log(this.gussedNumber.value);
            }
            else if (this.gussedNumber.value = this.generatedNumber) {
                this.commonVerificationActions();
                this.message = 'Your guess is correct!';
                this.successful = true;
            }
            else {
                this.commonVerificationActions();
                this.message = 'Try again!';
                this.error = true;
            }
        }
        else {
            this.resetHints();
            this.message = 'Try again!';
            this.error = true;
        }
    };
    GuessNumber = __decorate([
        core_1.Component({
            selector: 'guess-number',
            templateUrl: './app/guess-number/templates/guess-number.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GuessNumber);
    return GuessNumber;
}());
exports.GuessNumber = GuessNumber;
//# sourceMappingURL=guess-number.component.js.map