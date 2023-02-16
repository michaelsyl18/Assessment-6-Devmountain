const {shuffleArray} = require('./utils')
const {bots, playerRecord} = require('./data')

describe('shuffleArray should', () => {
    it("return an array", async () => {
    expect(Array.isArray(shuffleArray(bots))).toBe(true);
    });

    it("returns array of the same length as the argument", async () => {
    expect(shuffleArray(bots).length).toEqual(bots.length);
     });
})