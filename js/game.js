/**
 * Created by mark on 3/05/17.
 */
console.log("qasdasdasd")

window.onload = function () {

    var states = {
        preload: preload,
        create: create
    }
    var game = new Phaser.Game(800,600,Phaser.AUTO,'', states)


    function preload() {
        game.load.image('logo', 'assets/phaser.png');
    }

    function create() {
        game.add.sprite(0,0,'logo')
                    // game.world.centerXmgame.world.centerY
    }

}