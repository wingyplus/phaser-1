import PackColors from '../../renderer/webgl1/PackColors';
import IRenderable from './IRenderable';

export default function SetQuadTint (topLeft: number, topRight: number, bottomLeft: number, bottomRight: number, ...sprite: IRenderable[])
{
    sprite.forEach(entity => {

        let tint = entity.vertexTint;

        tint[0] = topLeft;
        tint[1] = topRight;
        tint[2] = bottomLeft;
        tint[3] = bottomRight;
    
        PackColors(entity);
    
    });
}
