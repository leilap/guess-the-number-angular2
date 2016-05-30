import { GuessedNumber } from "./guessed-number.model";
describe('GuessedNumberModel', () => {
    it('has value', () => {
        let GuessedNumber: GuessedNumber = {
            value: 4
        }
        expect(GuessedNumber.value).toEqual(4);
    });
});
