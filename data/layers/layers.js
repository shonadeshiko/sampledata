var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '淡色地図',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });

        var lyr_1917_1 = new ol.layer.Tile({
            'title': '東京1917年',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/00/{z}/{x}/{-y}.png'
            })
        });

        var lyr__2 = new ol.layer.Tile({
            'title': '標高図',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png'
            })
        });

        var lyr__3 = new ol.layer.Tile({
            'title': '傾斜量図',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png'
            })
        });

        var lyr__4 = new ol.layer.Tile({
            'title': '陰影起伏図',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png'
            })
        });

lyr__0.setVisible(true);lyr_1917_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr__0,lyr_1917_1,lyr__2,lyr__3,lyr__4];
