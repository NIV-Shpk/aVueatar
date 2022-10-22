import * as shapes from './shape/shapes'
type Style = 'character' | 'shape';
type ShapeNames = keyof typeof shapes
export {Style, ShapeNames, shapes};