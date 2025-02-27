const buildIsNumber = () => {
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Available under MIT license <https://lodash.com/license>
     */

    /** `Object#toString` result references. */
    const numberTag = '[object Number]'

    /** Used for built-in method references. */
    const objectProto = Object.prototype

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    const objectToString = objectProto.toString

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value: any) {
        return !!value && typeof value == 'object'
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    const output = function isNumber(value: any) {
        return (
            typeof value == 'number' ||
            (isObjectLike(value) && objectToString.call(value) == numberTag)
        )
    }
    return output
}

export const isNumber = buildIsNumber()
