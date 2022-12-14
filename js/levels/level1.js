let level; 

function initLevel(){
    
level = new Level(
    [
        new Chicken(500, 'normal'),
        new Chicken(700, 'normal'),
        new Chicken(9000, 'small'),
        new Chicken(1000, 'small'),
        new Chicken(8000, 'normal'),
        new Chicken(1200,'normal'),
        new Chicken(1800, 'normal'),
        new Chicken(4000, 'small'),
        new Chicken(5000, 'normal'),
        new Chicken(6000, 'normal'),
        new Chicken(7000,'normal'),
        new Chicken(8500, 'normal'),
        new Chicken(9000, 'small'),
        new Chicken(9500, 'normal'),
        new Chicken(10000, 'normal'),
        new Endboss()
    ],
    [
        new Cloud(500),
        new Cloud(1200),
        new Cloud(2000),
        new Cloud(2500),
        new Cloud(3000),
        new Cloud(4500),
        new Cloud(5000),
        new Cloud(7000),
        new Cloud(8000),
        new Cloud(9000),
        new Cloud(10000),
    ],
    [
        new Background('img/5_background/layers/air.png', 0),
        new Background('img/5_background/layers/3_third_layer/1.png', 0),
        new Background('img/5_background/layers/2_second_layer/1.png', 0),
        new Background('img/5_background/layers/1_first_layer/1.png', 0),
        new Background('img/5_background/layers/air.png', 719),
        new Background('img/5_background/layers/3_third_layer/2.png', 719),
        new Background('img/5_background/layers/2_second_layer/2.png', 719),
        new Background('img/5_background/layers/1_first_layer/2.png', 719),

        new Background('img/5_background/layers/air.png', 1438),
        new Background('img/5_background/layers/3_third_layer/1.png', 1438),
        new Background('img/5_background/layers/2_second_layer/1.png', 1438),
        new Background('img/5_background/layers/1_first_layer/1.png', 1438),
        new Background('img/5_background/layers/air.png', 2157),
        new Background('img/5_background/layers/3_third_layer/2.png', 2157),
        new Background('img/5_background/layers/2_second_layer/2.png', 2157),
        new Background('img/5_background/layers/1_first_layer/2.png', 2157),
        new Background('img/5_background/layers/air.png', 2876),

        new Background('img/5_background/layers/3_third_layer/1.png', 2876),
        new Background('img/5_background/layers/2_second_layer/1.png', 2876),
        new Background('img/5_background/layers/1_first_layer/1.png', 2876),
        new Background('img/5_background/layers/air.png', 3595),
        new Background('img/5_background/layers/3_third_layer/2.png', 3595),
        new Background('img/5_background/layers/2_second_layer/2.png', 3595),
        new Background('img/5_background/layers/1_first_layer/2.png', 3595),
    ],
    [
        new Box(600, 350, 60, 60, 'black'),
        new Box(605, 355, 50, 50, '#c57445'),
        new Box(655, 350, 60, 60, 'black'),
        new Box(660, 355, 50, 50, '#c57445'),
        new Box(628, 295, 60, 60, 'black'),
        new Box(633, 300, 50, 50, '#c57445'),

        new Box(1200, 350, 60, 60, 'black'),
        new Box(1205, 355, 50, 50, '#c57445'),
        new Box(1255, 350, 60, 60, 'black'),
        new Box(1260, 355, 50, 50, '#c57445'),
        new Box(1228, 295, 60, 60, 'black'),
        new Box(1233, 300, 50, 50, '#c57445'),
    ],
    [
        new Coin(200, 120),
        new Coin(350, 120),
        new Coin(1500, 180),
        new Coin(400, 200),
        new Coin(890, 180),
        new Coin(550, 160),
        new Coin(500, 140),
        new Coin(600, 70),
        new Coin(630, 70),
        new Coin(1200, 70),
        new Coin(1230, 70),
    ],
    [
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 400),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 800),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1220),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 1500),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 2500)
    ],
    [
        new StatusBar('health'),
        new StatusBar('coin'),
        new StatusBar('bottle')
    ]
);

}