/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ILine from './ILine';
/**
 * Extends the start and end points of a Line by the given amounts.
 *
 * The amounts can be positive or negative. Positive points will increase the length of the line,
 * while negative ones will decrease it.
 *
 * If no `right` value is provided it will extend the length of the line equally in both directions.
 *
 * Pass a value of zero to leave the start or end point unchanged.
 *
 * @function Phaser.Geom.Line.Extend
 * @since 3.16.0
 *
 * @param {Phaser.Geom.Line} line - The line instance to extend.
 * @param {number} left - The amount to extend the start of the line by.
 * @param {number} [right] - The amount to extend the end of the line by. If not given it will be set to the `left` value.
 *
 * @return {Phaser.Geom.Line} The modified Line instance.
 */
export default function Extend(line: ILine, left: number, right?: number): ILine;
//# sourceMappingURL=Extend.d.ts.map