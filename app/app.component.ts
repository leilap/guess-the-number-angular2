import { Component } from '@angular/core';
import { GuessNumber } from './guess-number/components/guess-number.component'
@Component({
    selector : 'app',
    template: '<guess-number></guess-number>',
    directives: [GuessNumber]
})
export class AppComponent{};
