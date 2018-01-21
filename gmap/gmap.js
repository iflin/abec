        //畫出地圖    
        function initMap() {

            //設定地圖初始的位置與尺度  
            var map; //畫出地圖 
            var markers = [];

            map = new google.maps.Map(document.getElementById('gmap'), {
                center: {
                    lat: 23.673875,
                    lng: 120.802024
                },
                zoom: 7,

                //控制捲動控制項目
                gestureHandling: 'auto',


                //設定地圖樣式
                styles: [{
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#444444"
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]

            });




            //加上標記  
            //給地圖上標記的位置資訊
            var marker_config = [{
                    position: {
                        "lat": 24.7947,
                        "lng": 120.9443
                    },
                    map: map,
                    "City_county": "新竹市",
                    "Site": "清華大學",
                    "Year": "2018"
                },
                {
                    position: {
                        "lat": 22.6247,
                        "lng": 120.2627
                    },
                    map: map,
                    "City_county": "高雄市",
                    "Site": "中山大學",
                    "Year": "2017"
                },
                {
                    position: {
                        "lat": 24.1236,
                        "lng": 120.6731
                    },
                    map: map,
                   "City_county": "臺中市",
                    "Site": "中興大學",
                    "Year": "2016, 2005"
                },
                {
                    position: {
                        "lat": 23.5038,
                        "lng": 120.3842
                    },
                    map: map,
                   "City_county": "嘉義市",
                    "Site": "嘉義大學",
                    "Year": "2015"
                },
                {
                    position: {
                        "lat": 24.1816,
                        "lng": 120.6009
                    },
                    map: map,
                     "City_county": "臺中市",
                    "Site": "東海大學",
                    "Year": "2014, 2009"
                },
                {
                    position: {
                        "lat": 23.8977,
                        "lng": 121.5396
                    },
                    map: map,
                     "City_county": "花蓮縣",
                    "Site": "東華大學",
                    "Year": "2013"
               },
                {
                    position: {
                        "lat": 25.1355,
                        "lng": 121.5377
                    },
                    map: map,
                    "City_county": "臺北市",
                    "Site": "文化大學",
                    "Year": "2012"
               },
                {
                    position: {
                        "lat": 22.9848,
                        "lng": 120.2058
                    },
                    map: map,
                    "City_county": "臺南市",
                    "Site": "臺南大學",
                    "Year": "2011"
                },
                {
                    position: {
                        "lat": 24.0828,
                        "lng": 120.5564
                    },
                    map: map,
                    "City_county": "彰化縣",
                    "Site": "彰化師範大學",
                    "Year": "2010"
                },
                {
                    position: {
                        "lat": 25.1509,
                        "lng": 121.7705
                    },
                    map: map,
                     "City_county": "基隆市",
                    "Site": "臺灣海洋大學",
                    "Year": "2008"
               },
                {
                    position: {
                        "lat": 23.9535,
                        "lng": 121.5103
                    },
                    map: map,
                     "City_county": "花蓮縣",
                    "Site": "花蓮教育大學",
                    "Year": "2007"
               },
                {
                    position: {
                        "lat": 22.6444,
                        "lng": 120.6076
                     },
                    map: map,
                     "City_county": "屏東縣",
                    "Site": "屏東科技大學",
                    "Year": "2006"
              },
                {
                    position: {
                        "lat": 25.0261,
                        "lng": 121.5253
                    },
                    map: map,
                    "City_county": "臺北市",
                    "Site": "臺灣師範大學",
                    "Year": "2004"
               },
                {
                    position: {
                        "lat": 22.6474,
                        "lng": 120.3076
                    },
                    map: map,
                    "City_county": "高雄市",
                    "Site": "高雄醫學大學",
                    "Year": "2003"
               },
                {
                    position: {
                        "lat": 24.1567,
                        "lng": 120.6634
                   },
                    map: map,
                     "City_county": "臺中市",
                    "Site": "自然科學博物館",
                    "Year": "2002"
               },
                {
                    position: {
                        "lat": 24.9989,
                        "lng": 121.5789
                    },
                    map: map,
                    "City_county": "臺北市",
                    "Site": "臺北市立動物園",
                    "Year": "2001, 1994"
               },
                {
                    position: {
                        "lat": 23.9928,
                        "lng": 121.5891
                   },
                    map: map,
                    "City_county": "花蓮縣",
                    "Site": "慈濟大學",
                    "Year": "2000"
                },
                {
                    position: {
                       "lat": 22.9997,
                        "lng": 120.2159
                     },
                    map: map,
                   "City_county": "臺南市",
                    "Site": "成功大學",
                    "Year": "1999"
                 },
                {
                    position: {
                        "lat": 23.8284,
                        "lng": 120.799
                    },
                    map: map,
                  "City_county": "南投縣",
                    "Site": "特有生物研究保育中心",
                    "Year": "1998"
               },
                {
                    position: {
                        "lat": 23.6726,
                        "lng": 120.7957
                    },
                    map: map,
                    "City_county": "南投縣",
                    "Site": "溪頭紅樓",
                    "Year": "1997"
                },
                {
                    position: {
                        "lat": 24.0912,
                        "lng": 121.0315
                    },
                    map: map,
                    "City_county": "南投縣",
                    "Site": "惠蓀林場",
                    "Year": "1996"
               },
                {
                    position: {
                        "lat": 22.0712,
                        "lng": 120.7618
                    },
                    map: map,
                      "City_county": "屏東縣",
                    "Site": "屏東技術學院保力林場、墾丁國家公園管理處生態研習教室",
                    "Year": "1995"
               },
                {
                    position: {
                        "lat": 25.0315521,
                        "lng": 121.5073669
                    },
                    map: map,
                    "City_county": "臺北市",
                    "Site": "臺灣省林業試驗所",
                    "Year": "1993"
               },
                {
                    position: {
                        "lat": 21.9411,
                        "lng": 120.7971
                    },
                    map: map,
                   "City_county": "屏東縣",
                    "Site": "墾丁青年活動中心",
                    "Year": "1986"
                },
               ];

            //            // 給資訊窗的依序對應內容
            var info_config_0= [{
                    "City_county": "新竹市",
                    "Site": "清華大學",
                    "Year": "2018"
                }, {
                    "City_county": "高雄市",
                    "Site": "中山大學",
                    "Year": "2017"
                }, {
                    "City_county": "臺中市",
                    "Site": "中興大學",
                    "Year": "2016, 2005"
                }, {
                    "City_county": "嘉義市",
                    "Site": "嘉義大學",
                    "Year": "2015"
                }, {
                    "City_county": "臺中市",
                    "Site": "東海大學",
                    "Year": "2014, 2009"
                }, {
                    "City_county": "花蓮縣",
                    "Site": "東華大學",
                    "Year": "2013"
                }, {
                    "City_county": "臺北市",
                    "Site": "文化大學",
                    "Year": "2012"
                }, {
                    "City_county": "臺南市",
                    "Site": "臺南大學",
                    "Year": "2011"
                }, {
                    "City_county": "彰化縣",
                    "Site": "彰化師範大學",
                    "Year": "2010"
                }, {
                    "City_county": "基隆市",
                    "Site": "臺灣海洋大學",
                    "Year": "2008"
                }, {
                    "City_county": "花蓮縣",
                    "Site": "花蓮教育大學",
                    "Year": "2007"
                }, {
                    "City_county": "屏東縣",
                    "Site": "屏東科技大學",
                    "Year": "2006"
                }, {
                    "City_county": "臺北市",
                    "Site": "臺灣師範大學",
                    "Year": "2004"
                }, {
                    "City_county": "高雄市",
                    "Site": "高雄醫學大學",
                    "Year": "2003"
                }, {
                    "City_county": "臺中市",
                    "Site": "自然科學博物館",
                    "Year": "2002"
                }, {
                    "City_county": "臺北市",
                    "Site": "臺北市立動物園",
                    "Year": "2001, 1994"
                }, {
                    "City_county": "花蓮縣",
                    "Site": "慈濟大學",
                    "Year": "2000"
                }, {
                    "City_county": "臺南市",
                    "Site": "成功大學",
                    "Year": "1999"
                }, {
                    "City_county": "南投縣",
                    "Site": "特有生物研究保育中心",
                    "Year": "1998"
                }, {
                    "City_county": "南投縣",
                    "Site": "溪頭紅樓",
                    "Year": "1997"
                }, {
                    "City_county": "南投縣",
                    "Site": "惠蓀林場",
                    "Year": "1996"
                }, {
                    "City_county": "屏東縣",
                    "Site": "屏東技術學院保力林場、墾丁國家公園管理處生態研習教室",
                    "Year": "1995"
                }, {
                    "City_county": "臺北市",
                    "Site": "臺灣省林業試驗所",
                    "Year": "1993"
                }, {
                    "City_county": "屏東縣",
                    "Site": "墾丁青年活動中心",
                    "Year": "1986"
                }];
 /*{ City_county: '高雄市', Site: '中山大學', Year: '2017' } */
    var info_config=[];
    info_config_0.forEach(function(e, i) {
        info_config[i] = '<h3>'+info_config_0[i].City_county+'</h3>'+
                        '<p>'+info_config_0[i].Site+'</p>'+
                        '<p>'+info_config_0[i].Year+'年'+'</p>'
       /* new google.maps.InfoWindow({
                    content: e
                }); */
            });
/*           var info_config = [
                '<h3>測試1</h3>' + '<p>11111</p>',
                '<h3>測試2</h3>' + '<p>22222</p>',
                '<h3>測試3</h3>' + '<p>33333</p>',
                '<h3>測試4</h3>' + '<p>44444</p>',
                '<h3>測試5</h3>' + '<p>55555</p>'
            ]; */

            //將標記畫到地圖上
            marker_config.forEach(function(e, i) {
                markers[i] = new google.maps.Marker(e);
                markers[i].setMap(map);
            });


            var infoWindows = []; //宣告資訊窗的存在
            // 設定資訊窗內容到標記上,連結資訊框跟點的位置
            info_config.forEach(function(e, i) {
                infoWindows[i] = new google.maps.InfoWindow({
                    content: e
                });
            });


            //將標記跟資訊窗畫到地圖上，點選可以打開
            marker_config.forEach(function(e, i) {
                markers[i].addListener('click', function() {
                    console.log(e);
                    infoWindows[i].open(map, markers[i]);
                    for (var j = 0; j < marker_config.length; j++) {
                        if (j != i) {
                            infoWindows[j].close();
                            //點選其他點會關閉原本的資訊窗
                        }
                    }
                });
            });


            //指向群聚時會顯示的圓圈Logo，所以可能可以自訂
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });

        }
