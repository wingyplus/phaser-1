import { Vec4 } from './Vec4';
import { Vec4Add } from './Vec4Add';
import { Vec4Scale } from './Vec4Scale';

export function Vec4Center (a: Vec4, b: Vec4, out: Vec4 = new Vec4()): Vec4
{
    Vec4Add(a, b, out);

    return Vec4Scale(out, 0.5, out);
}
