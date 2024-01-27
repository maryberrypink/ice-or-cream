let mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let mySprite3 = sprites.create(img`
    . . . . . 3 3 b 3 3 d d 3 3 . . 
    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
    . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
    . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
    . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
    . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
    . 4 4 d 1 1 1 1 1 1 d d d b b . 
    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
    4 5 5 d 5 5 d b b b d d 3 . . . 
    4 5 5 5 d d d d 4 4 b 3 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . 3 3 b 3 3 d d 3 3 . . 
    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
    . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
    . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
    . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
    . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
    . 4 4 d 1 1 1 1 1 1 d d d b b . 
    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
    4 5 5 d 5 5 d b b b d d 3 . . . 
    4 5 5 5 d d d d 4 4 b 3 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . . . . 3 3 b 3 3 d d 3 3 . . 
    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
    . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
    . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
    . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
    . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
    . 4 4 d 1 1 1 1 1 1 d d d b b . 
    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
    4 5 5 d 5 5 d b b b d d 3 . . . 
    4 5 5 5 d d d d 4 4 b 3 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(32, 20)
mySprite3.setPosition(139, 46)
mySprite4.setPosition(138, 96)
scene.setBackgroundImage(img`
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    dddddddddddddddddddddfffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffddddddddddfffffffffffffffdddfffffffdddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffdddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffdddddddddddddddddddddddddddddddffffffffffffffffffdddddddffffffffffffdddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddd
    dddddddddddddddddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddd
    dddddddddddddddddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddd
    dddddddddddddddddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddd
    dddddddddddddddddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddfffffffffffffdddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffffffffffffddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddfffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffdddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddfffffddddddddfffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddffffffddddddddddddddddddfffffdddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddfffffdddddddddddddddddddddddddddd
    ddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddfffffdddddddddddddddddddddddddddd
    ddddddddddddddddddddffffffffffffffffdddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddddddfffffdddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
