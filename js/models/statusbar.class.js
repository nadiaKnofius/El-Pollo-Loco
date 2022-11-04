class StatusBar extends MovableObjects {
    width = 200;
    height = 60;
    x = -80;
    value;
    type;
    images = {
        'coin': [
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
        ],
        'bottle': [
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
        ],
        'health': [
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
        ]
    };

    constructor(type) {
        super();
        let currentStatusbar = this.getKindofStatusBar(type);
        let imgSrc = this.getImgSrc(currentStatusbar);
        this.loadImage(currentStatusbar[imgSrc]);
    }


    getKindofStatusBar(type) {
        if (type == 'bottle') return this.setValues(10, 0, type);
        if (type == 'coin') return this.setValues(60, 0, type);
        if (type == 'health') return this.setValues(110, 100, type);
    }


    setValues(y, value, type) {
        this.y = y;
        this.value = value;
        this.type = type;
        return this.images[type]; 
    }


    getImgSrc(currentStatusbar) {
        for (let i = 0; i < currentStatusbar.length; i++) {
            let img = currentStatusbar[i];
            if(img.includes(this.value)) return i;
        }
    }

}