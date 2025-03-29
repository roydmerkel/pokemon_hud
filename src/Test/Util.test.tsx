import { useBodyClass, getPropertyByPath, recursiveWalk, NumberOrString, toUnsigned, multAndTrunc, udivAndTrunc, divAndTrunc, addAndTrunc, subAndTrunc } from '../Util';
import { describe, expect, test } from '@jest/globals';

describe('utils module', () => {
    test('NumberOrString of undefined should be "undefined"', () => {
        expect(NumberOrString(undefined)).toBe("undefined");
    });

    test('NumberOrString of null should be "null"', () => {
        expect(NumberOrString(null)).toBe("null");
    });

    test('NumberOrString of "" should be ""', () => {
        expect(NumberOrString("")).toBe("");
    });

    test('NumberOrString of "a" should be "a"', () => {
        expect(NumberOrString("a")).toBe("a");
    });

    test('NumberOrString of "0" should be 0', () => {
        expect(NumberOrString("0")).toBe(0);
    });

    test('NumberOrString of "1" should be 1', () => {
        expect(NumberOrString("1")).toBe(1);
    });

    test('NumberOrString of 0 should be 0', () => {
        expect(NumberOrString(0)).toBe(0);
    });

    test('NumberOrString of 1 should be 1', () => {
        expect(NumberOrString(1)).toBe(1);
    });

    test('NumberOrString of -1 should be -1', () => {
        expect(NumberOrString(-1)).toBe(-1);
    });

    test('NumberOrString of "-1" should be -1', () => {
        expect(NumberOrString("-1")).toBe(-1);
    });

    test('toUnsigned of undefined should be NaN', () => {
        var undefVar;
        expect(toUnsigned(undefVar)).toBeNaN();
    })

    test('toUnsigned of null should be NaN', () => {
        ;
        expect(toUnsigned(null)).toBeNaN();
    })

    test('toUnsigned of -2147483649 should be NaN', () => {
        expect(toUnsigned(-2147483649)).toBeNaN();
    })

    test('toUnsigned of -2147483648 should be 0x80000000', () => {
        expect(toUnsigned(-2147483648)).toBe(0x80000000);
    })
    test('toUnsigned of -2 should be 0xFFFFFFFE', () => {
        expect(toUnsigned(-2)).toBe(0xFFFFFFFE);
    })

    test('toUnsigned of -1 should be 0xFFFFFFFF', () => {
        expect(toUnsigned(-1)).toBe(0xFFFFFFFF);
    })

    test('toUnsigned of 0 should be 0x0', () => {
        expect(toUnsigned(0)).toBe(0x0);
    })

    test('toUnsigned of 1 should be 0x1', () => {
        expect(toUnsigned(1)).toBe(0x1);
    })

    test('toUnsigned of 2 should be 0x2', () => {
        expect(toUnsigned(2)).toBe(0x2);
    })

    test('toUnsigned of 2147483647 should be 0x7FFFFFFF', () => {
        expect(toUnsigned(2147483647)).toBe(0x7FFFFFFF);
    })

    test('toUnsigned of 4294967295 should be 0xFFFFFFFF', () => {
        expect(toUnsigned(4294967295)).toBe(0xFFFFFFFF);
    })

    test('toUnsigned of 4294967296 should be NaN', () => {
        expect(toUnsigned(4294967296)).toBeNaN();
    })

    test('multAndTrunc of -1 and -1 should be 0x1', () => {
        expect(multAndTrunc(-1, -1)).toBe(0x1);
    })

    test('multAndTrunc of 0xFFFFFFFF and 0xFFFFFFFF should be 0x1', () => {
        expect(multAndTrunc(0xFFFFFFFF, 0xFFFFFFFF)).toBe(0x1);
    })

    test('multAndTrunc of 1 and -1 should be 0xFFFFFFFF', () => {
        expect(multAndTrunc(1, -1)).toBe(0xFFFFFFFF);
    })

    test('udivAndTrunc of 1 and 2 should be 0', () => {
        expect(udivAndTrunc(1, 2)).toBe(0);
    })

    test('udivAndTrunc of 2 and 2 should be 1', () => {
        expect(udivAndTrunc(2, 2)).toBe(1);
    })

    test('udivAndTrunc of 2 and 0 should be NaN', () => {
        expect(udivAndTrunc(2, 0)).toBeNaN();
    })

    test('udivAndTrunc of -1 and 2 should be 0x7FFFFFFF', () => {
        expect(udivAndTrunc(-1, 2)).toBe(0x7FFFFFFF);
    })

    test('udivAndTrunc of -2 and 2 should be 0x7FFFFFFF', () => {
        expect(udivAndTrunc(-2, 2)).toBe(0x7FFFFFFF);
    })

    test('udivAndTrunc of -2147483648 and 2 should be 0x40000000', () => {
        expect(udivAndTrunc(-2147483648, 2)).toBe(0x40000000);
    })

    test('udivAndTrunc of 0x7FFFFFFF and 2 should be 0x3FFFFFFF', () => {
        expect(udivAndTrunc(0x7FFFFFFF, 2)).toBe(0x3FFFFFFF);
    })

    test('divAndTrunc of 2 and 2 should be 1', () => {
        expect(divAndTrunc(2, 2)).toBe(1);
    })

    test('divAndTrunc of 2 and 0 should be NaN', () => {
        expect(divAndTrunc(2, 0)).toBeNaN();
    })

    test('divAndTrunc of -1 and 2 should be 0', () => {
        expect(divAndTrunc(-1, 2)).toBe(0);
    })

    test('divAndTrunc of -2 and 2 should be 0xFFFFFFFF', () => {
        expect(divAndTrunc(-2, 2)).toBe(0xFFFFFFFF);
    })

    test('divAndTrunc of -2147483648 and 2 should be 0xC0000000', () => {
        expect(divAndTrunc(-2147483648, 2)).toBe(0xC0000000);
    })

    test('divAndTrunc of 0x7FFFFFFF and 2 should be 0x3FFFFFFF', () => {
        expect(divAndTrunc(0x7FFFFFFF, 2)).toBe(0x3FFFFFFF);
    })

    test('addAndTrunc of -1 and 1 should be 0x00000000', () => {
        expect(addAndTrunc(-1, 1)).toBe(0x00000000);
    })

    test('addAndTrunc of -1 and -1 should be 0xFFFFFFFE', () => {
        expect(addAndTrunc(-1, -1)).toBe(0xFFFFFFFE);
    })

    test('addAndTrunc of 0xFFFFFFFF and 1 should be 0x00000000', () => {
        expect(addAndTrunc(0xFFFFFFFF, 1)).toBe(0x00000000);
    })

    test('addAndTrunc of 1 and 1 should be 0x00000002', () => {
        expect(addAndTrunc(1, 1)).toBe(0x00000002);
    })

    test('addAndTrunc of 0 and 0 should be 0x00000000', () => {
        expect(addAndTrunc(0, 0)).toBe(0x00000000);
    })

    test('addAndTrunc of 0x7FFFFFFF and 1 should be 0x80000000', () => {
        expect(addAndTrunc(0x7FFFFFFF, 1)).toBe(0x80000000);
    })

    test('subAndTrunc of 1 and 1 should be 0x00000000', () => {
        expect(subAndTrunc(1, 1)).toBe(0x00000000);
    })

    test('subAndTrunc of 1 and 2 should be 0xFFFFFFFF', () => {
        expect(subAndTrunc(1, 2)).toBe(0xFFFFFFFF);
    })

    test('subAndTrunc of 1 and -1 should be 0x2', () => {
        expect(subAndTrunc(1, -1)).toBe(0x00000002);
    })

    test('subAndTrunc of 1 and 0xFFFFFFFF should be 0x2', () => {
        expect(subAndTrunc(1, 0xFFFFFFFF)).toBe(0x00000002);
    })

    test('subAndTrunc of -1 and -1 should be 0x0', () => {
        expect(subAndTrunc(-1, -1)).toBe(0x00000000);
    })

    test('subAndTrunc of 0xFFFFFFFF and 0xFFFFFFFF should be 0x0', () => {
        expect(subAndTrunc(0xFFFFFFFF, 0xFFFFFFFF)).toBe(0x00000000);
    })

    test('subAndTrunc of -1 and 1 should be 0xFFFFFFFE', () => {
        expect(subAndTrunc(-1, 1)).toBe(0xFFFFFFFE);
    })

    test('subAndTrunc of 0xFFFFFFFF and 1 should be 0xFFFFFFFE', () => {
        expect(subAndTrunc(0xFFFFFFFF, 1)).toBe(0xFFFFFFFE);
    })
});
