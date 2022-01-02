import Vue           from 'vue'
import MdFab         from './fab'
import MdRow         from './row'
import MdCol         from './col'
import MdTypo        from './typo'
import MdIcon        from './icon'
import MdButton      from "./button";
import MdFabItem     from "./fab-item";
import MdButtonGroup from "./button-group";

export class Fab extends MdFab {}

export class Row extends MdRow {}

export class Col extends MdCol {}

export class Typo extends MdTypo {}

export class Icon extends MdIcon {}

export class Button extends MdButton {}

export class FabItem extends MdFabItem {}

export class ButtonGroup extends MdButtonGroup {}

export function install (vue: typeof Vue): void