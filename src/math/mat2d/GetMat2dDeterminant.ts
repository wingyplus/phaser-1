import { IMatrix2D } from './IMatrix2D';

//  Return the determinant for the src Matrix.

export function GetMat2dDeterminant (src: IMatrix2D): number
{
    const { a, b, c, d } = src;

    return (a * d) - (b * c);
}
