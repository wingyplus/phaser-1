import { IVec2Like } from './IVec2Like';

export function GetVec2AngleY (a: IVec2Like, b: IVec2Like): number
{
    return Math.atan2(b.x - a.x, b.y - a.y);
}
