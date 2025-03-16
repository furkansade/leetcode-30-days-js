/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    // solution
    return {
        toBe: (otherVal) => {
            if(otherVal === val) {
                return true;
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: (otherVal) => {
             if(otherVal === val) {
                throw new Error("Equal")
            } else {
                return true;
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */