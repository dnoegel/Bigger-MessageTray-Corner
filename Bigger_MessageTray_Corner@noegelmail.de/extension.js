
const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;

const RESIZE=300;

function init() {
}

function enable() {
    Main.messageTray._corner.width += RESIZE;
    Main.messageTray._corner.x -= RESIZE;
}

function disable() {
    Main.messageTray._corner.width -= RESIZE;
    Main.messageTray._corner.x += RESIZE;
}
