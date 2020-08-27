const assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});


const assert = require('assert');
describe('Anagram', ()=>{
    it('should return any positive value', () => {
        const value = getAnagrams([]);
        assert.strictEqual(true, !!value);
    });

    it('should return array', () => {
        const value = getAnagrams([]);
        assert.strictEqual(Array.isArray(value), true);
    });

    it('should throw error when parameter is not an array', () => {
        const argument = 'string';
        assert.throws(() => { getAnagrams(argument) }, Error, "Bad parameter");
    });

    it('should return empty array when no anagrams in parameter', () => {
        const argument = [];
        assert.strictEqual(getAnagrams(argument).length, 0);
    });

    it('should return array of anagrams when valid argument passed', () => {
        const argument = ['test', 'sett'];
        assert.strictEqual([], []);
    });
});

function getAnagrams(){
    if(!Array.isArray(data)){
        throw new Error("Bad parameter");
    }
    return[];
};

const testData = [
    'kinship',
    'pinkish',
    'enlist',
    'inlets',
    'listen',
    'silent',
    'boaster',
    'boaters',
    'borates'
];