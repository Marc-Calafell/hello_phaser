/**
 * Created by mark on 3/05/17.
 */
console.log("qasdasdasd")

window.load = function () {

    var states = {
        preload: preload,
        create: create
    }
    var game = new Phaser(800,600,Phaser.AUTO,'', states)


    function preload() {
        game.load.image('logo', 'assets/phaser.png');
    }

}