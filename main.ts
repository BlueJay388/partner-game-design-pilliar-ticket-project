namespace SpriteKind {
    export const Interactive = SpriteKind.create()
    export const Student = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Interactive, function (sprite, otherSprite) {
    game.showLongText("There ain't nothin' over 'ere", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Student, function (sprite, otherSprite) {
    game.showLongText("Hi my name is Dev what is happening? can I follow you", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    game.showLongText("You found the Meta Moon Bottle ", DialogLayout.Bottom)
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLightMoss)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.showLongText("You found the Lemon Lime Bottle ", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`myTile11`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level 2`)
    mySprite = sprites.create(img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 2 2 2 f . . . 
        . . e 4 4 e 2 2 2 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorMixed)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 100)
})
function Setup_level (_1: number) {
	
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 4 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 2 2 2 f . . . 
    . . e 4 4 e 2 2 2 f . . . 
    . . f e e f 6 6 6 f . . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
let mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e f f f f f f e e f . . 
    . . f e f f f f f f f f e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f f f f f f f f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Interactive)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorLight1)
let MySprite_3 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 9 9 9 9 b f e f . 
    e 4 f 9 9 9 9 9 9 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Student)
tiles.placeOnRandomTile(MySprite_3, sprites.dungeon.collectibleBlueCrystal)
game.showLongText("Welcome, your principal mistaked your name for someone else.", DialogLayout.Center)
game.showLongText("He then locked you in the lockeroom dungeons.", DialogLayout.Center)
game.showLongText("After you get out of your cell gather your fellow students.", DialogLayout.Center)
game.showLongText("Rally to get out and take down the evil principals reign.", DialogLayout.Center)
