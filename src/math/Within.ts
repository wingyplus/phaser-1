/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks if the two values are within the given `tolerance` of each other.
 *
 * @function Phaser.Math.Within
 * @since 3.0.0
 *
 * @param {number} a - The first value to use in the calculation.
 * @param {number} b - The second value to use in the calculation.
 * @param {number} tolerance - The tolerance. Anything equal to or less than this value is considered as being within range.
 *
 * @return {boolean} Returns `true` if `a` is less than or equal to the tolerance of `b`.
 */
export default function Within (a: number, b: number, tolerance: number): boolean
{
    return (Math.abs(a - b) <= tolerance);
}