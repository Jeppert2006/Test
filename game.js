const game = new phaser.Game(800, 600, Phaser.AUTO,'', {
  preload: preload,
  create: create,
  update, update

})

let platforms
let player
let diamonds

function preload () {
  game.load.image('sky', 'assets/sky.png')
  game.load.image('ground', 'assets/platform.png')
  game.load.image('diamond', 'assets/diamond.png')
  game.load.spridesheet('woof', 'assets/woof.png', 32 32)
}

function create () {
  game.Physics.StartSystem(Phaser.Physics.ARCADE)

  game.add.sprite(0, 0, 'sky')

  plaforms = game.add.group()
  platforms.enableBody = true

  let ground = platforms.create(0, game.world.heigt - 64, 'ground')
  ground.scale.setTo(2,2)
  ground.body.immovable = true

  let ledge = platform.create(400, 450, 'ground')
  ledge.body.immovable = true

  let ledge = platform.create(400, 450, 'ground')
  ledge.body.immovable = true

  player = game.add.sprite(32, game.world.heigt - 150, 'woof')
  game.phisics.arcade.enable(player)
  player.body.gravity.y = 800
  player.body.collideWorldBounds = true

  player.animations.add(`left`, [0, 1], 10, true)
  player.animations.add(`left`, [2, 3], 10, true)

  diamonds = game.add.group()
  diamonds.enableBody = true

  for (var i = 0; i < 12; i++)
  let diamond = diamonds.create(i * 70, 0, 'diamonds')
  diamond.body.gravity.y = 1000
  diamond.body.bounce.y = 0.3 + Math.random() * 0.2

  scoreText = game.add.text(16, 16, '', { fontSize: '32px', fill: '#000'})
  cursors = game.input.keyboard.createCursorKeys()

}

function update () {
  game.Physics.arcade.collide(player, platforms)
  game.Physics.arcade.collide(diamonds, platforms)
  game.Physics.arcade.overlap(player, diamonds, collectDiamond, null, this)

  player.body.velocity.x = 0
}


if (cursors.left.isDown) {
  player.body.velocity.x = -150
  player.animations.play(`left`)
} else if (cursors.right.isDown) {
  player.body.velocity.x = 150
  player.animations.play(`right`)
} else if {}



function.collectionDiamond (player, diamond) {
  diamond.kill()

  score += 1
  scoreText.text = 'score: ' + score
}
