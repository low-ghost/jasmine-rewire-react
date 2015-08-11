import { add } from '../add';
describe("the jasmine framework", () => {
    it('should run in the first place', () => {
        expect(1 + 1).toEqual(2);
    });
    it('should do the add function', () => {
        expect(add(1, 1)).toEqual(2);
    })
});
