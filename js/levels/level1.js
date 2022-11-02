const level = new Level(
    [
        new Chicken(500),
        new Chicken(700),
        new Chicken(900),
        new Chicken(1000),
        new Chicken(800),
        new Chicken(1200),
        new Chicken(1200),
        new Chicken(3000),
        new Chicken(3000),
        new Chicken(4000),
        new Endboss()
    ],
    [
        new Cloud(100),
        new Cloud(800),
        new Cloud(1200),
        new Cloud(1500),
        new Cloud(1900),
        new Cloud(2900),
        new Cloud(3500),
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
        new Box (600, 350, 60, 60, 'black'),
        new Box (605, 355, 50, 50, '#c57445'),
        new Box (655, 350, 60, 60, 'black'),
        new Box (660, 355, 50, 50, '#c57445'),
        new Box (628, 295, 60, 60, 'black'),
        new Box (633, 300, 50, 50, '#c57445'),

        new Box (1200, 350, 60, 60, 'black'),
        new Box (1205, 355, 50, 50, '#c57445'),
        new Box (1255, 350, 60, 60, 'black'),
        new Box (1260, 355, 50, 50, '#c57445'),
        new Box (1228, 295, 60, 60, 'black'),
        new Box (1233, 300, 50, 50, '#c57445'),
    ],
    [
        new Coin(200, 140),
        new Coin(250, 160),
        new Coin(300, 180),
        new Coin(350, 200),
        new Coin(400, 180),
        new Coin(450, 160),
        new Coin(500, 140),
        new Coin(600, 70),
        new Coin(630, 70),
        new Coin(1200, 70),
        new Coin(1230, 70),
    ]
);