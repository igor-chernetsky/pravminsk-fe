export function mapInitialize() {
  const google = window.google;
  var styles = [
    { featureType: "administrative", stylers: [{ visibility: "on" }] },
    { featureType: "poi", stylers: [{ visibility: "simplified" }] },
    { featureType: "road", stylers: [{ visibility: "simplified" }] },
    { featureType: "water", stylers: [{ visibility: "simplified" }] },
    { featureType: "transit", stylers: [{ visibility: "simplified" }] },
    { featureType: "landscape", stylers: [{ visibility: "simplified" }] },
    { featureType: "road.highway", stylers: [{ visibility: "on" }] },
    { featureType: "road.local", stylers: [{ visibility: "on" }] },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ visibility: "on" }],
    },
    { featureType: "road.arterial", stylers: [{ visibility: "on" }] },
    {
      featureType: "water",
      stylers: [{ color: "#5f94ff" }, { lightness: 26 }, { gamma: 5.86 }],
    },
    {},
    {
      featureType: "road.highway",
      stylers: [{ weight: 0.6 }, { saturation: -85 }, { lightness: 61 }],
    },
    { featureType: "road" },
    {},
    {
      featureType: "landscape",
      stylers: [{ hue: "#0066ff" }, { saturation: 74 }, { lightness: 100 }],
    },
  ];

  var mapOptions = {
    center: new google.maps.LatLng(53.947, 27.472),
    zoom: 9,
    //mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var map = new google.maps.Map(
    document.getElementById("map_canvas"),
    mapOptions
  );
  map.setOptions({ styles: styles });

  var myLatLng0 = new google.maps.LatLng(53.904682, 27.55168);
  var infowindow0 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/petro-pavlovskij-sobor-goroda-minska" style="font-weight: bold;">Петро-Павловский собор в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Раковская, 4</div>',
    maxWidth: 200,
  });
  var beachMarker0 = new google.maps.Marker({
    position: myLatLng0,
    title: "Петро-Павловский собор в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker0, "click", function () {
    infowindow0.open(map, beachMarker0);
  });

  var myLatLng1 = new google.maps.LatLng(53.923217, 27.516304);
  var infowindow1 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pravednogo-ioanna-kronshtadtskogo-v-gorode-minske" style="font-weight: bold;">Храм преподобного Иоанна Рыльского прихода праведного Иоанна Кронштадтского в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Саперов, д. 5</div>',
    maxWidth: 200,
  });
  var beachMarker1 = new google.maps.Marker({
    position: myLatLng1,
    title:
      "Храм преподобного Иоанна Рыльского прихода праведного Иоанна Кронштадтского в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker1, "click", function () {
    infowindow1.open(map, beachMarker1);
  });

  var myLatLng2 = new google.maps.LatLng(53.937896, 27.493927);
  var infowindow2 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pokrova-presvjatoj-bogorodicy-v-gorode-minske" style="font-weight: bold;">Храм Покрова Пресвятой Богородицы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр-т Победителей, 82</div>',
    maxWidth: 200,
  });
  var beachMarker2 = new google.maps.Marker({
    position: myLatLng2,
    title: "Храм Покрова Пресвятой Богородицы в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker2, "click", function () {
    infowindow2.open(map, beachMarker2);
  });

  var myLatLng3 = new google.maps.LatLng(53.916016, 27.553674);
  var infowindow3 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ravnoapostolnoj-marii-magdaliny-v-gorode-minske" style="font-weight: bold;">Храм равноапостольной Марии Магдалины в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Киселева, 42</div>',
    maxWidth: 200,
  });
  var beachMarker3 = new google.maps.Marker({
    position: myLatLng3,
    title: "Храм равноапостольной Марии Магдалины в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker3, "click", function () {
    infowindow3.open(map, beachMarker3);
  });

  var myLatLng4 = new google.maps.LatLng(54.108482, 27.46104);
  var infowindow4 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pokrova-presvjatoj-bogorodicy-derevni-juzufovo" style="font-weight: bold;">Храм Покрова Пресвятой Богородицы деревни Юзуфово</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Юзуфово, ул. Молодежная, 23-1</div>',
    maxWidth: 200,
  });
  var beachMarker4 = new google.maps.Marker({
    position: myLatLng4,
    title: "Храм Покрова Пресвятой Богородицы деревни Юзуфово",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker4, "click", function () {
    infowindow4.open(map, beachMarker4);
  });

  var myLatLng5 = new google.maps.LatLng(54.00705, 27.465205);
  var infowindow5 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-presvjatoj-bogorodicy-v-derevne-semkov-gorodok" style="font-weight: bold;">Храм Рождества Пресвятой Богородицы в деревне Сёмков Городок</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Семков Городок, ул. Школьная, 7</div>',
    maxWidth: 200,
  });
  var beachMarker5 = new google.maps.Marker({
    position: myLatLng5,
    title: "Храм Рождества Пресвятой Богородицы в деревне Сёмков Городок",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker5, "click", function () {
    infowindow5.open(map, beachMarker5);
  });

  var myLatLng6 = new google.maps.LatLng(54.023941, 27.428661);
  var infowindow6 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-voznesenija-gospodnja-v-derevne-semkovo" style="font-weight: bold;">Храм Вознесения Господня в деревне Сёмково</a><hr style="margin:5px 0"><i>Адрес:</i> 223042 Минский район, д. Семково, ул. Проектная, 3</div>',
    maxWidth: 200,
  });
  var beachMarker6 = new google.maps.Marker({
    position: myLatLng6,
    title: "Храм Вознесения Господня в деревне Сёмково",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker6, "click", function () {
    infowindow6.open(map, beachMarker6);
  });

  var myLatLng7 = new google.maps.LatLng(54.072303, 27.697306);
  var infowindow7 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-preobrazhenija-gospodnja-v-derevne-ostroshickij-gorodok" style="font-weight: bold;">Храм Преображения Господня в деревне Острошицкий Городок</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Острошицкий Городок, ул. Ленинская, 4а</div>',
    maxWidth: 200,
  });
  var beachMarker7 = new google.maps.Marker({
    position: myLatLng7,
    title: "Храм Преображения Господня в деревне Острошицкий Городок",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker7, "click", function () {
    infowindow7.open(map, beachMarker7);
  });

  var myLatLng8 = new google.maps.LatLng(53.998354, 27.632034);
  var infowindow8 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-v-skorbeh-i-pechaleh-uteshenie-v-derevne-malinovka" style="font-weight: bold;">Храм иконы Божией Матери «В скорбех и печалех Утешение» в деревне Малиновка</a><hr style="margin:5px 0"><i>Адрес:</i> 223000, Минский район, д. Малиновка, 76</div>',
    maxWidth: 200,
  });
  var beachMarker8 = new google.maps.Marker({
    position: myLatLng8,
    title:
      "Храм иконы Божией Матери «В скорбех и печалех Утешение» в деревне Малиновка",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker8, "click", function () {
    infowindow8.open(map, beachMarker8);
  });

  var myLatLng9 = new google.maps.LatLng(53.985207, 27.792545);
  var infowindow9 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vozdvizhenija-kresta-gospodnja-v-derevne-korolev-stan" style="font-weight: bold;">Храм Воздвижения Креста Господня в деревне Королев Стан</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Королев Стан, пер. Воскресенский, 1</div>',
    maxWidth: 200,
  });
  var beachMarker9 = new google.maps.Marker({
    position: myLatLng9,
    title: "Храм Воздвижения Креста Господня в деревне Королев Стан",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker9, "click", function () {
    infowindow9.open(map, beachMarker9);
  });

  var myLatLng10 = new google.maps.LatLng(53.919076, 27.753199);
  var infowindow10 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-hristova-v-agrogorodke-kolodishi" style="font-weight: bold;">Храм святителя Спиридона Тримифунтского (прихода Рождества Христова) в агрогородке Колодищи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, а.г. Колодищи, ул. Рублевская, 37</div>',
    maxWidth: 200,
  });
  var beachMarker10 = new google.maps.Marker({
    position: myLatLng10,
    title:
      "Храм святителя Спиридона Тримифунтского (прихода Рождества Христова) в агрогородке Колодищи",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker10, "click", function () {
    infowindow10.open(map, beachMarker10);
  });

  var myLatLng11 = new google.maps.LatLng(53.950801, 27.803514);
  var infowindow11 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hrama-uspenija-presvjatoj-bogorodicy-v-agrogorodke-kolodishi" style="font-weight: bold;">Храм Купятицкой иконы Божией Матери (прихода Успения Пресвятой Богородицы) в агрогородке Колодищи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский р-н, аг. Колодищи, ул. Волмянский шлях, 73</div>',
    maxWidth: 200,
  });
  var beachMarker11 = new google.maps.Marker({
    position: myLatLng11,
    title:
      "Храм Купятицкой иконы Божией Матери (прихода Успения Пресвятой Богородицы) в агрогородке Колодищи",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker11, "click", function () {
    infowindow11.open(map, beachMarker11);
  });

  var myLatLng12 = new google.maps.LatLng(53.952295, 27.776978);
  var infowindow12 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-voznesenija-gospodnja-v-agrogorodke-kolodishi" style="font-weight: bold;">Храм Вознесения Господня в агрогородке Колодищи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, аг. Колодищи, ул. Партизанская, д. 3-а</div>',
    maxWidth: 200,
  });
  var beachMarker12 = new google.maps.Marker({
    position: myLatLng12,
    title: "Храм Вознесения Господня в агрогородке Колодищи",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker12, "click", function () {
    infowindow12.open(map, beachMarker12);
  });

  var myLatLng13 = new google.maps.LatLng(54.072773, 27.500476);
  var infowindow13 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-proroka-ilii-v-derevne-kasyn" style="font-weight: bold;">Храм пророка Илии в деревне Касынь</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, п/о Вишневка, д. Касынь, пер. Западный, 13</div>',
    maxWidth: 200,
  });
  var beachMarker13 = new google.maps.Marker({
    position: myLatLng13,
    title: "Храм пророка Илии в деревне Касынь",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker13, "click", function () {
    infowindow13.open(map, beachMarker13);
  });

  var myLatLng14 = new google.maps.LatLng(54.18361, 27.50483);
  var infowindow14 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-apostolov-petra-i-pavla-v-derevne-zhukovka" style="font-weight: bold;">Храм апостолов Петра и Павла в деревне Жуковка</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Жуковка</div>',
    maxWidth: 200,
  });
  var beachMarker14 = new google.maps.Marker({
    position: myLatLng14,
    title: "Храм апостолов Петра и Павла в деревне Жуковка",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker14, "click", function () {
    infowindow14.open(map, beachMarker14);
  });

  var myLatLng15 = new google.maps.LatLng(54.003331, 27.678855);
  var infowindow15 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatoj-zhivonachalnoj-troicy-v-derevne-borovljany" style="font-weight: bold;">Храм Святой Живоначальной Троицы в деревне Боровляны</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Боровляны, ул. Октябрьская, 33</div>',
    maxWidth: 200,
  });
  var beachMarker15 = new google.maps.Marker({
    position: myLatLng15,
    title: "Храм Святой Живоначальной Троицы в деревне Боровляны",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker15, "click", function () {
    infowindow15.open(map, beachMarker15);
  });

  var myLatLng16 = new google.maps.LatLng(54.063183, 27.555723);
  var infowindow16 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pravednyh-ioakima-i-anny-v-derevne-vishnevka" style="font-weight: bold;">Храм праведных Иоакима и Анны в деревне Вишневка</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Вишневка, ул. Строителей, 1</div>',
    maxWidth: 200,
  });
  var beachMarker16 = new google.maps.Marker({
    position: myLatLng16,
    title: "Храм праведных Иоакима и Анны в деревне Вишневка",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker16, "click", function () {
    infowindow16.open(map, beachMarker16);
  });

  var myLatLng17 = new google.maps.LatLng(54.003363, 27.572799);
  var infowindow17 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-preobrazhenija-gospodnja-v-derevne-bolshevik" style="font-weight: bold;">Храм  Преображения Господня в деревне Большевик</a><hr style="margin:5px 0"><i>Адрес:</i> Минская область, д. Большевик, ул. Фабричная, 8</div>',
    maxWidth: 200,
  });
  var beachMarker17 = new google.maps.Marker({
    position: myLatLng17,
    title: "Храм  Преображения Господня в деревне Большевик",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker17, "click", function () {
    infowindow17.open(map, beachMarker17);
  });

  var myLatLng18 = new google.maps.LatLng(53.891094, 27.203547);
  var infowindow18 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hrama-pokrova-presvjatoj-bogorodicy-v-derevne-chachkovo" style="font-weight: bold;">Храм Покрова Пресвятой Богородицы в деревне Чачково</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, а.г. Чачково, ул. Первомайская, 4</div>',
    maxWidth: 200,
  });
  var beachMarker18 = new google.maps.Marker({
    position: myLatLng18,
    title: "Храм Покрова Пресвятой Богородицы в деревне Чачково",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker18, "click", function () {
    infowindow18.open(map, beachMarker18);
  });

  var myLatLng19 = new google.maps.LatLng(53.914022, 27.300388);
  var infowindow19 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatoj-zhivonachalnoj-troicy-v-derevne-hatezhino" style="font-weight: bold;">Храм Святой Живоначальной Троицы в деревне Хатежино</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Хатежино, пер. Мира, 17б</div>',
    maxWidth: 200,
  });
  var beachMarker19 = new google.maps.Marker({
    position: myLatLng19,
    title: "Храм Святой Живоначальной Троицы в деревне Хатежино",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker19, "click", function () {
    infowindow19.open(map, beachMarker19);
  });

  var myLatLng20 = new google.maps.LatLng(53.920895, 27.388564);
  var infowindow20 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-presvjatoj-bogorodicy-v-derevne-tarasovo" style="font-weight: bold;">Храм Рождества Пресвятой Богородицы в деревне Тарасово</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Тарасово, ул. Рождественская, 2</div>',
    maxWidth: 200,
  });
  var beachMarker20 = new google.maps.Marker({
    position: myLatLng20,
    title: "Храм Рождества Пресвятой Богородицы в деревне Тарасово",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker20, "click", function () {
    infowindow20.open(map, beachMarker20);
  });

  var myLatLng21 = new google.maps.LatLng(53.888972, 27.263456);
  var infowindow21 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-presvjatoj-bogorodicy-v-derevne-staroe-selo" style="font-weight: bold;">Храм великомученика Димитрия Солунского прихода Рождества Пресвятой Богородицы в деревне Старое Село</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Старое Село, ул. Центральная, 52А</div>',
    maxWidth: 200,
  });
  var beachMarker21 = new google.maps.Marker({
    position: myLatLng21,
    title:
      "Храм великомученика Димитрия Солунского прихода Рождества Пресвятой Богородицы в деревне Старое Село",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker21, "click", function () {
    infowindow21.open(map, beachMarker21);
  });

  var myLatLng22 = new google.maps.LatLng(53.940196, 27.348181);
  var infowindow22 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-apostolov-petra-i-pavla-v-derevne-ratomka" style="font-weight: bold;">Храм апостолов Петра и Павла в деревне Ратомка</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Ратомка, ул. Привокзальная, 9</div>',
    maxWidth: 200,
  });
  var beachMarker22 = new google.maps.Marker({
    position: myLatLng22,
    title: "Храм апостолов Петра и Павла в деревне Ратомка",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker22, "click", function () {
    infowindow22.open(map, beachMarker22);
  });

  var myLatLng23 = new google.maps.LatLng(54.069571, 27.217686);
  var infowindow23 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-feodosija-chernigovskogo-v-derevne-petrishki" style="font-weight: bold;">Храм святителя Феодосия Черниговского в деревне Петришки</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Петришки, ул. Центральная, д. 7</div>',
    maxWidth: 200,
  });
  var beachMarker23 = new google.maps.Marker({
    position: myLatLng23,
    title: "Храм святителя Феодосия Черниговского в деревне Петришки",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker23, "click", function () {
    infowindow23.open(map, beachMarker23);
  });

  var myLatLng24 = new google.maps.LatLng(54.042278, 27.784523);
  var infowindow24 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-muchenika-ioanna-voina-v-derevne-okolica" style="font-weight: bold;">Храм мученика Иоанна Воина в деревне Околица </a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Околица</div>',
    maxWidth: 200,
  });
  var beachMarker24 = new google.maps.Marker({
    position: myLatLng24,
    title: "Храм мученика Иоанна Воина в деревне Околица ",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker24, "click", function () {
    infowindow24.open(map, beachMarker24);
  });

  var myLatLng25 = new google.maps.LatLng(53.917879, 27.18929);
  var infowindow25 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-hristova-v-derevne-novosele" style="font-weight: bold;">Храм Рождества Христова в деревне Новоселье</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Новоселье, ул. Рождественская, 2</div>',
    maxWidth: 200,
  });
  var beachMarker25 = new google.maps.Marker({
    position: myLatLng25,
    title: "Храм Рождества Христова в деревне Новоселье",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker25, "click", function () {
    infowindow25.open(map, beachMarker25);
  });

  var myLatLng26 = new google.maps.LatLng(54.001818, 27.265585);
  var infowindow26 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hrama-sobora-svjatyh-zemli-belorusskoj-v-gorode-zaslavle" style="font-weight: bold;">Храм Собора святых земли Белорусской в городе Заславле</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, г. Заславль, ул. Рогнеды, 26</div>',
    maxWidth: 200,
  });
  var beachMarker26 = new google.maps.Marker({
    position: myLatLng26,
    title: "Храм Собора святых земли Белорусской в городе Заславле",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker26, "click", function () {
    infowindow26.open(map, beachMarker26);
  });

  var myLatLng27 = new google.maps.LatLng(54.007157, 27.292076);
  var infowindow27 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-preobrazhenija-gospodnja-v-gorode-zaslavle" style="font-weight: bold;">Кафедральный собор Преображения Господня в городе Заславле</a><hr style="margin:5px 0"><i>Адрес:</i> Минская область, г. Заславль, ул. Замковая, 6 </div>',
    maxWidth: 200,
  });
  var beachMarker27 = new google.maps.Marker({
    position: myLatLng27,
    title: "Кафедральный собор Преображения Господня в городе Заславле",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker27, "click", function () {
    infowindow27.open(map, beachMarker27);
  });

  var myLatLng28 = new google.maps.LatLng(53.952115, 27.429779);
  var infowindow28 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-voznesenija-gospodnja-v-derevne-zhdanovichi" style="font-weight: bold;">Храм Вознесения Господня в деревне Ждановичи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, а.г. Ждановичи ул. Подлесная, 6</div>',
    maxWidth: 200,
  });
  var beachMarker28 = new google.maps.Marker({
    position: myLatLng28,
    title: "Храм Вознесения Господня в деревне Ждановичи",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker28, "click", function () {
    infowindow28.open(map, beachMarker28);
  });

  var myLatLng29 = new google.maps.LatLng(53.95549, 27.109439);
  var infowindow29 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-otrada-i-uteshenie-v-derevne-aksakovshina" style="font-weight: bold;">Храм иконы Божией Матери «Отрада и Утешение» в деревне Аксаковщина</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Аксаковщина, 2</div>',
    maxWidth: 200,
  });
  var beachMarker29 = new google.maps.Marker({
    position: myLatLng29,
    title: "Храм иконы Божией Матери «Отрада и Утешение» в деревне Аксаковщина",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker29, "click", function () {
    infowindow29.open(map, beachMarker29);
  });

  var myLatLng30 = new google.maps.LatLng(53.824271, 27.452174);
  var infowindow30 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/prihod-hrama-svjatitelja-lavrentija-turovskogo-v-derevne-shomyslica" style="font-weight: bold;">Храм святителя Лаврентия Туровского в деревне Щомыслица</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, аг. Щомыслица, ул. Жуковского, 50</div>',
    maxWidth: 200,
  });
  var beachMarker30 = new google.maps.Marker({
    position: myLatLng30,
    title: "Храм святителя Лаврентия Туровского в деревне Щомыслица",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker30, "click", function () {
    infowindow30.open(map, beachMarker30);
  });

  var myLatLng31 = new google.maps.LatLng(53.827224, 27.532774);
  var infowindow31 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hrama-apostolov-petra-i-pavla-v-derevne-sennica" style="font-weight: bold;">Храм апостолов Петра и Павла в деревне Сеница</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, аг. Сенница, ул. Прилукская, 2</div>',
    maxWidth: 200,
  });
  var beachMarker31 = new google.maps.Marker({
    position: myLatLng31,
    title: "Храм апостолов Петра и Павла в деревне Сеница",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker31, "click", function () {
    infowindow31.open(map, beachMarker31);
  });

  var myLatLng32 = new google.maps.LatLng(53.738771, 27.506696);
  var infowindow32 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatogo-duha-v-derevne-samohvalovichi" style="font-weight: bold;">Храм Святого Духа в деревне Самохваловичи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, аг. Самохваловичи ул. Калинина, 7а</div>',
    maxWidth: 200,
  });
  var beachMarker32 = new google.maps.Marker({
    position: myLatLng32,
    title: "Храм Святого Духа в деревне Самохваловичи",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker32, "click", function () {
    infowindow32.open(map, beachMarker32);
  });

  var myLatLng33 = new google.maps.LatLng(53.78613, 27.440754);
  var infowindow33 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-presvjatoj-bogorodicy-v-derevne-priluki" style="font-weight: bold;">Храм Рождества Пресвятой Богородицы в деревне Прилуки</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Прилуки, ул. Больничная, д. 8</div>',
    maxWidth: 200,
  });
  var beachMarker33 = new google.maps.Marker({
    position: myLatLng33,
    title: "Храм Рождества Пресвятой Богородицы в деревне Прилуки",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker33, "click", function () {
    infowindow33.open(map, beachMarker33);
  });

  var myLatLng34 = new google.maps.LatLng(53.792336, 27.795213);
  var infowindow34 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-nikolaja-chudotvorca-v-poselke-privolnyj" style="font-weight: bold;">Храм святителя Николая Чудотворца в поселке Привольный</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, п. Привольный, ул. Тепличная, 18</div>',
    maxWidth: 200,
  });
  var beachMarker34 = new google.maps.Marker({
    position: myLatLng34,
    title: "Храм святителя Николая Чудотворца в поселке Привольный",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker34, "click", function () {
    infowindow34.open(map, beachMarker34);
  });

  var myLatLng35 = new google.maps.LatLng(53.813788, 27.656298);
  var infowindow35 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hrama-arhistratiga-mihaila-v-derevne-novyj-dvor" style="font-weight: bold;">Храм архистратига Михаила в деревне Новый Двор</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Новый Двор, ул. Центральная, 5</div>',
    maxWidth: 200,
  });
  var beachMarker35 = new google.maps.Marker({
    position: myLatLng35,
    title: "Храм архистратига Михаила в деревне Новый Двор",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker35, "click", function () {
    infowindow35.open(map, beachMarker35);
  });

  var myLatLng36 = new google.maps.LatLng(53.7414675, 27.696121759);
  var infowindow36 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-dimitrija-rostovskogo-v-poselke-mihanovichi" style="font-weight: bold;">Храм святителя Димитрия Ростовского в поселке Михановичи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, п. Михановичи, ул. Школьная, д. 10</div>',
    maxWidth: 200,
  });
  var beachMarker36 = new google.maps.Marker({
    position: myLatLng36,
    title: "Храм святителя Димитрия Ростовского в поселке Михановичи",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker36, "click", function () {
    infowindow36.open(map, beachMarker36);
  });

  var myLatLng37 = new google.maps.LatLng(53.781836, 27.606046);
  var infowindow37 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-velikomuchenika-i-celitelja-panteleimona-v-poselke-machulishi" style="font-weight: bold;">Храм великомученика и целителя Пантелеимона в городском поселке Мачулищи </a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, п. Мачулищи, ул. Пантелеимоновская, 1</div>',
    maxWidth: 200,
  });
  var beachMarker37 = new google.maps.Marker({
    position: myLatLng37,
    title:
      "Храм великомученика и целителя Пантелеимона в городском поселке Мачулищи ",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker37, "click", function () {
    infowindow37.open(map, beachMarker37);
  });

  var myLatLng38 = new google.maps.LatLng(53.680059, 27.527276);
  var infowindow38 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-uspenija-presvjatoj-bogorodicy-v-derevne-krupica" style="font-weight: bold;">Храм Успения Пресвятой Богородицы в деревне Крупица</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Крупица, ул. Слуцкая, д. 2</div>',
    maxWidth: 200,
  });
  var beachMarker38 = new google.maps.Marker({
    position: myLatLng38,
    title: "Храм Успения Пресвятой Богородицы в деревне Крупица",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker38, "click", function () {
    infowindow38.open(map, beachMarker38);
  });

  var myLatLng39 = new google.maps.LatLng(53.820614, 27.868013);
  var infowindow39 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-prepodobnogo-serafima-sarovskogo-v-derevne-zamostoche" style="font-weight: bold;">Храм преподобного Серафима Саровского в деревне Замосточье</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Замосточье, ул. Школьная, 4Б</div>',
    maxWidth: 200,
  });
  var beachMarker39 = new google.maps.Marker({
    position: myLatLng39,
    title: "Храм преподобного Серафима Саровского в деревне Замосточье",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker39, "click", function () {
    infowindow39.open(map, beachMarker39);
  });

  var myLatLng40 = new google.maps.LatLng(53.830419, 27.333246);
  var infowindow40 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-nikolaja-chudotvorca-v-derevne-gorodishe" style="font-weight: bold;">Храм святителя Николая Чудотворца в деревне Городище</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Городище, ул. Пионерская, 2а</div>',
    maxWidth: 200,
  });
  var beachMarker40 = new google.maps.Marker({
    position: myLatLng40,
    title: "Храм святителя Николая Чудотворца в деревне Городище",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker40, "click", function () {
    infowindow40.open(map, beachMarker40);
  });

  var myLatLng41 = new google.maps.LatLng(53.782656, 27.63224);
  var infowindow41 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatogo-duha-v-poselke-gatovo" style="font-weight: bold;">Храм Святого Духа в поселке Гатово </a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, п. Гатово, ул. Металлургическая, 16Б</div>',
    maxWidth: 200,
  });
  var beachMarker41 = new google.maps.Marker({
    position: myLatLng41,
    title: "Храм Святого Духа в поселке Гатово ",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker41, "click", function () {
    infowindow41.open(map, beachMarker41);
  });

  var myLatLng42 = new google.maps.LatLng(53.874025, 27.696106);
  var infowindow42 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-hristova-v-derevne-bolshoe-stiklevo" style="font-weight: bold;">Храм Рождества Христова в деревне Большое  Стиклево</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Большое Стиклево</div>',
    maxWidth: 200,
  });
  var beachMarker42 = new google.maps.Marker({
    position: myLatLng42,
    title: "Храм Рождества Христова в деревне Большое  Стиклево",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker42, "click", function () {
    infowindow42.open(map, beachMarker42);
  });

  var myLatLng43 = new google.maps.LatLng(53.849976, 27.539636);
  var infowindow43 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-luki-arhiepiskopa-simferopolskogo-v-gorode-minske" style="font-weight: bold;">Храм святителя Луки, архиепископа Симферопольского, в городе Минске </a><hr style="margin:5px 0"><i>Адрес:</i> 220000 г. Минск, ул. Осиповичская</div>',
    maxWidth: 200,
  });
  var beachMarker43 = new google.maps.Marker({
    position: myLatLng43,
    title:
      "Храм святителя Луки, архиепископа Симферопольского, в городе Минске ",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker43, "click", function () {
    infowindow43.open(map, beachMarker43);
  });

  var myLatLng44 = new google.maps.LatLng(53.845216, 27.504821);
  var infowindow44 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pravednoj-sofii-sluckoj-v-gorode-minske" style="font-weight: bold;">Храм праведной Софии Слуцкой в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Казинца, 108</div>',
    maxWidth: 200,
  });
  var beachMarker44 = new google.maps.Marker({
    position: myLatLng44,
    title: "Храм праведной Софии Слуцкой в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker44, "click", function () {
    infowindow44.open(map, beachMarker44);
  });

  var myLatLng45 = new google.maps.LatLng(53.877747, 27.90194);
  var infowindow45 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-nikolaja-chudotvorca-v-gorode-minske-mikrorajon-sokol" style="font-weight: bold;">Храм святителя Николая Чудотворца в городе Минске (микрорайон Сокол)</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, п. Сокол, ул. Барамзиной, 20</div>',
    maxWidth: 200,
  });
  var beachMarker45 = new google.maps.Marker({
    position: myLatLng45,
    title:
      "Храм святителя Николая Чудотворца в городе Минске (микрорайон Сокол)",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker45, "click", function () {
    infowindow45.open(map, beachMarker45);
  });

  var myLatLng46 = new google.maps.LatLng(53.902784, 27.564444);
  var infowindow46 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ravnoapostolnyh-mefodija-i-kirilla-v-gorode-minske" style="font-weight: bold;">Храм равноапостольных Мефодия и Кирилла в городе Минске (при Представительстве Патриарха Московского и всея Руси в Белорусском Экзархате)</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. Независимости, 26</div>',
    maxWidth: 200,
  });
  var beachMarker46 = new google.maps.Marker({
    position: myLatLng46,
    title:
      "Храм равноапостольных Мефодия и Кирилла в городе Минске (при Представительстве Патриарха Московского и всея Руси в Белорусском Экзархате)",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker46, "click", function () {
    infowindow46.open(map, beachMarker46);
  });

  var myLatLng47 = new google.maps.LatLng(53.849218, 27.571993);
  var infowindow47 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-bogojavlenija-v-gorode-minske" style="font-weight: bold;">Храм Богоявления в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Чижевских, 4</div>',
    maxWidth: 200,
  });
  var beachMarker47 = new google.maps.Marker({
    position: myLatLng47,
    title: "Храм Богоявления в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker47, "click", function () {
    infowindow47.open(map, beachMarker47);
  });

  var myLatLng48 = new google.maps.LatLng(53.884237, 27.590533);
  var infowindow48 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ravnoapostolnoj-knjagini-olgi-v-gorode-minske" style="font-weight: bold;">Храм равноапостольной княгини Ольги в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. Партизанский, д. 17</div>',
    maxWidth: 200,
  });
  var beachMarker48 = new google.maps.Marker({
    position: myLatLng48,
    title: "Храм равноапостольной княгини Ольги в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker48, "click", function () {
    infowindow48.open(map, beachMarker48);
  });

  var myLatLng49 = new google.maps.LatLng(53.852547, 27.616973);
  var infowindow49 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-apostola-andreja-pervozvannogo-v-gorode-minske" style="font-weight: bold;">Храм апостола Андрея Первозванного в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Малинина, 19</div>',
    maxWidth: 200,
  });
  var beachMarker49 = new google.maps.Marker({
    position: myLatLng49,
    title: "Храм апостола Андрея Первозванного в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker49, "click", function () {
    infowindow49.open(map, beachMarker49);
  });

  var myLatLng50 = new google.maps.LatLng(53.905242, 27.669686);
  var infowindow50 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-donskaja-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Донская» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Лесопарковая</div>',
    maxWidth: 200,
  });
  var beachMarker50 = new google.maps.Marker({
    position: myLatLng50,
    title: "Храм иконы Божией Матери «Донская» в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker50, "click", function () {
    infowindow50.open(map, beachMarker50);
  });

  var myLatLng51 = new google.maps.LatLng(53.884885, 27.610178);
  var infowindow51 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-ioanna-predtechi-v-gorode-minske" style="font-weight: bold;">Храм Рождества Иоанна Предтечи в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Стахановская, д. 32</div>',
    maxWidth: 200,
  });
  var beachMarker51 = new google.maps.Marker({
    position: myLatLng51,
    title: "Храм Рождества Иоанна Предтечи в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker51, "click", function () {
    infowindow51.open(map, beachMarker51);
  });

  var myLatLng52 = new google.maps.LatLng(53.90047, 27.623761);
  var infowindow52 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-neupivaemaja-chasha-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Неупиваемая Чаша» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Менделеева, д. 2</div>',
    maxWidth: 200,
  });
  var beachMarker52 = new google.maps.Marker({
    position: myLatLng52,
    title: "Храм иконы Божией Матери «Неупиваемая Чаша» в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker52, "click", function () {
    infowindow52.open(map, beachMarker52);
  });

  var myLatLng53 = new google.maps.LatLng(53.864879, 27.666205);
  var infowindow53 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-blagoveshenija-presvjatoj-bogorodicy-v-gorode-minske" style="font-weight: bold;">Храм Благовещения Пресвятой Богородицы в городе Минске </a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. Партизанский, 147</div>',
    maxWidth: 200,
  });
  var beachMarker53 = new google.maps.Marker({
    position: myLatLng53,
    title: "Храм Благовещения Пресвятой Богородицы в городе Минске ",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker53, "click", function () {
    infowindow53.open(map, beachMarker53);
  });

  var myLatLng54 = new google.maps.LatLng(53.840081, 27.707966);
  var infowindow54 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-nikolaja-chudotvorca-v-gorode-minske-mikrorajon-shabany" style="font-weight: bold;">Храм святителя Николая Чудотворца в городе Минске (микрорайон Шабаны)</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Ельницкая, 28а</div>',
    maxWidth: 200,
  });
  var beachMarker54 = new google.maps.Marker({
    position: myLatLng54,
    title:
      "Храм святителя Николая Чудотворца в городе Минске (микрорайон Шабаны)",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker54, "click", function () {
    infowindow54.open(map, beachMarker54);
  });

  var myLatLng55 = new google.maps.LatLng(53.840893, 27.619941);
  var infowindow55 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-velikomuchenika-georgija-pobedonosca-v-gorode-minske" style="font-weight: bold;">Храм Минской иконы Божией Матери прихода великомученика Георгия Победоносца в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Голодеда, 60</div>',
    maxWidth: 200,
  });
  var beachMarker55 = new google.maps.Marker({
    position: myLatLng55,
    title:
      "Храм Минской иконы Божией Матери прихода великомученика Георгия Победоносца в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker55, "click", function () {
    infowindow55.open(map, beachMarker55);
  });

  var myLatLng56 = new google.maps.LatLng(53.873631, 27.649122);
  var infowindow56 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vladimirskoj-ikony-bozhiej-materi-v-gorode-minske" style="font-weight: bold;">Храм Владимирской иконы Божией Матери в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Волжский проезд, 8</div>',
    maxWidth: 200,
  });
  var beachMarker56 = new google.maps.Marker({
    position: myLatLng56,
    title: "Храм Владимирской иконы Божией Матери в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker56, "click", function () {
    infowindow56.open(map, beachMarker56);
  });

  var myLatLng57 = new google.maps.LatLng(53.935962, 27.684388);
  var infowindow57 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-sobora-belorusskih-svjatyh-v-gorode-minske" style="font-weight: bold;">Храм Собора белорусских святых в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пер. Шугаева, 19/3</div>',
    maxWidth: 200,
  });
  var beachMarker57 = new google.maps.Marker({
    position: myLatLng57,
    title: "Храм Собора белорусских святых в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker57, "click", function () {
    infowindow57.open(map, beachMarker57);
  });

  var myLatLng58 = new google.maps.LatLng(53.933889, 27.691817);
  var infowindow58 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-muchenicy-tatiany-v-gorode-minske" style="font-weight: bold;">Храм мученицы Татианы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Руссиянова, 50 </div>',
    maxWidth: 200,
  });
  var beachMarker58 = new google.maps.Marker({
    position: myLatLng58,
    title: "Храм мученицы Татианы в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker58, "click", function () {
    infowindow58.open(map, beachMarker58);
  });

  var myLatLng59 = new google.maps.LatLng(53.943715, 27.720415);
  var infowindow59 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-prepodobnomuchenika-afanasija-brestskogo-v-gorode-minske" style="font-weight: bold;">Храм преподобномученика Афанасия Брестского в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, п. Озерище, ул. Сиреневая, 16</div>',
    maxWidth: 200,
  });
  var beachMarker59 = new google.maps.Marker({
    position: myLatLng59,
    title: "Храм преподобномученика Афанасия Брестского в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker59, "click", function () {
    infowindow59.open(map, beachMarker59);
  });

  var myLatLng60 = new google.maps.LatLng(53.951647, 27.704747);
  var infowindow60 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-velikomuchenika-i-celitelja-panteleimona-v-gorode-minske" style="font-weight: bold;">Храм великомученика и целителя Пантелеимона в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. Независимости, 191</div>',
    maxWidth: 200,
  });
  var beachMarker60 = new google.maps.Marker({
    position: myLatLng60,
    title: "Храм великомученика и целителя Пантелеимона в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker60, "click", function () {
    infowindow60.open(map, beachMarker60);
  });

  var myLatLng61 = new google.maps.LatLng(53.94052, 27.616601);
  var infowindow61 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatoj-zhivonachalnoj-troicy-v-gorode-minske" style="font-weight: bold;">Храм Святой Живоначальной Троицы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Севастопольская, 100</div>',
    maxWidth: 200,
  });
  var beachMarker61 = new google.maps.Marker({
    position: myLatLng61,
    title: "Храм Святой Живоначальной Троицы в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker61, "click", function () {
    infowindow61.open(map, beachMarker61);
  });

  var myLatLng62 = new google.maps.LatLng(53.942025, 27.65384);
  var infowindow62 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-v-chest-vseh-svjatyh-v-gorode-minske" style="font-weight: bold;">Приход храма в честь Всех Святых в городе Минске </a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Всехсвятская 2</div>',
    maxWidth: 200,
  });
  var beachMarker62 = new google.maps.Marker({
    position: myLatLng62,
    title: "Приход храма в честь Всех Святых в городе Минске ",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker62, "click", function () {
    infowindow62.open(map, beachMarker62);
  });

  var myLatLng63 = new google.maps.LatLng(53.928992, 27.658121);
  var infowindow63 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pravednogo-iova-mnogostradalnogo-v-gorode-minske" style="font-weight: bold;">Храм праведного Иова Многострадального в городе Минске (Всехсвятского прихода)</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Ф. Скорины, 11</div>',
    maxWidth: 200,
  });
  var beachMarker63 = new google.maps.Marker({
    position: myLatLng63,
    title:
      "Храм праведного Иова Многострадального в городе Минске (Всехсвятского прихода)",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker63, "click", function () {
    infowindow63.open(map, beachMarker63);
  });

  var myLatLng64 = new google.maps.LatLng(53.941312, 27.654441);
  var infowindow64 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatoj-zhivonachalnoj-troicy-v-gorode-minske-vsehsvjatskogo-prihoda" style="font-weight: bold;">Храм Святой Троицы в городе Минске (Всехсвятского прихода)</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Всехсвятская, 2</div>',
    maxWidth: 200,
  });
  var beachMarker64 = new google.maps.Marker({
    position: myLatLng64,
    title: "Храм Святой Троицы в городе Минске (Всехсвятского прихода)",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker64, "click", function () {
    infowindow64.open(map, beachMarker64);
  });

  var myLatLng65 = new google.maps.LatLng(53.969078, 27.58132);
  var infowindow65 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-uspenija-presvjatoj-bogorodicy-v-gorode-minske" style="font-weight: bold;">Храм Успения Пресвятой Богородицы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пересечение улицы Зеленолугская и переулка Боровецкий</div>',
    maxWidth: 200,
  });
  var beachMarker65 = new google.maps.Marker({
    position: myLatLng65,
    title: "Храм Успения Пресвятой Богородицы в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker65, "click", function () {
    infowindow65.open(map, beachMarker65);
  });

  var myLatLng66 = new google.maps.LatLng(53.944068, 27.594776);
  var infowindow66 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ravnoapostolnogo-knjazja-vladimira-v-gorode-minske" style="font-weight: bold;">Храм равноапостольного князя Владимира в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. 1-я Поселковая, д. 47</div>',
    maxWidth: 200,
  });
  var beachMarker66 = new google.maps.Marker({
    position: myLatLng66,
    title: "Храм равноапостольного князя Владимира в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker66, "click", function () {
    infowindow66.open(map, beachMarker66);
  });

  var myLatLng67 = new google.maps.LatLng(53.93271, 27.567137);
  var infowindow67 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-vzyskanie-pogibshih-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Взыскание погибших» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> 220068 г. Минск, ул. Карастояновой, 14</div>',
    maxWidth: 200,
  });
  var beachMarker67 = new google.maps.Marker({
    position: myLatLng67,
    title: "Храм иконы Божией Матери «Взыскание погибших» в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker67, "click", function () {
    infowindow67.open(map, beachMarker67);
  });

  var myLatLng68 = new google.maps.LatLng(53.956074, 27.603823);
  var infowindow68 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-voskresenija-hristova-v-gorode-minske" style="font-weight: bold;">Храм Воскресения Христова в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Гамарника, 29а</div>',
    maxWidth: 200,
  });
  var beachMarker68 = new google.maps.Marker({
    position: myLatLng68,
    title: "Храм Воскресения Христова в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker68, "click", function () {
    infowindow68.open(map, beachMarker68);
  });

  var myLatLng69 = new google.maps.LatLng(53.908571, 27.587405);
  var infowindow69 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-blagovernogo-knjazja-aleksandra-nevskogo-v-gorode-minske" style="font-weight: bold;">Храм благоверного князя Александра Невского в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Козлова, 11</div>',
    maxWidth: 200,
  });
  var beachMarker69 = new google.maps.Marker({
    position: myLatLng69,
    title: "Храм благоверного князя Александра Невского в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker69, "click", function () {
    infowindow69.open(map, beachMarker69);
  });

  var myLatLng70 = new google.maps.LatLng(53.886267, 27.52409);
  var infowindow70 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-vsecarica-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Всецарица» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Грушевская, 50</div>',
    maxWidth: 200,
  });
  var beachMarker70 = new google.maps.Marker({
    position: myLatLng70,
    title: "Храм иконы Божией Матери «Всецарица» в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker70, "click", function () {
    infowindow70.open(map, beachMarker70);
  });

  var myLatLng71 = new google.maps.LatLng(53.851821, 27.487127);
  var infowindow71 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-prepodobnogo-sergija-radonezhskogo-v-gorode-minske" style="font-weight: bold;">Храм преподобных Кирилла и Марии Радонежских (прихода преподобного Сергия Радонежского) в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Каролинская, 7</div>',
    maxWidth: 200,
  });
  var beachMarker71 = new google.maps.Marker({
    position: myLatLng71,
    title:
      "Храм преподобных Кирилла и Марии Радонежских (прихода преподобного Сергия Радонежского) в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker71, "click", function () {
    infowindow71.open(map, beachMarker71);
  });

  var myLatLng72 = new google.maps.LatLng(53.852159, 27.458327);
  var infowindow72 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-optinskih-starcev-v-gorode-minske" style="font-weight: bold;">Храм Оптинских старцев в городе Минске (прихода храма Серафима Саровского)</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Космонавтов, 24</div>',
    maxWidth: 200,
  });
  var beachMarker72 = new google.maps.Marker({
    position: myLatLng72,
    title:
      "Храм Оптинских старцев в городе Минске (прихода храма Серафима Саровского)",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker72, "click", function () {
    infowindow72.open(map, beachMarker72);
  });

  var myLatLng73 = new google.maps.LatLng(53.893892, 27.506469);
  var infowindow73 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vvedenija-vo-hram-presvjatoj-bogorodicy-v-gorode-minske" style="font-weight: bold;">Храм младенца Гавриила Белостокского прихода Введения  во храм Пресвятой Богородицы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Карпова, 1</div>',
    maxWidth: 200,
  });
  var beachMarker73 = new google.maps.Marker({
    position: myLatLng73,
    title:
      "Храм младенца Гавриила Белостокского прихода Введения  во храм Пресвятой Богородицы в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker73, "click", function () {
    infowindow73.open(map, beachMarker73);
  });

  var myLatLng74 = new google.maps.LatLng(53.859675, 27.476756);
  var infowindow74 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-preobrazhenija-gospodnja-v-gorode-minske" style="font-weight: bold;">Храм Преображения Господня в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. газеты «Правда», 31</div>',
    maxWidth: 200,
  });
  var beachMarker74 = new google.maps.Marker({
    position: myLatLng74,
    title: "Храм Преображения Господня в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker74, "click", function () {
    infowindow74.open(map, beachMarker74);
  });

  var myLatLng75 = new google.maps.LatLng(53.920995, 27.434587);
  var infowindow75 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-nikolaja-japonskogo-v-gorode-minske" style="font-weight: bold;">Храм святителя Николая Японского в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Лидская, 7</div>',
    maxWidth: 200,
  });
  var beachMarker75 = new google.maps.Marker({
    position: myLatLng75,
    title: "Храм святителя Николая Японского в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker75, "click", function () {
    infowindow75.open(map, beachMarker75);
  });

  var myLatLng76 = new google.maps.LatLng(53.881346, 27.43865);
  var infowindow76 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-arhangela-mihaila-v-gorode-minske" style="font-weight: bold;">Храм Архангела Михаила в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Янковского, 2</div>',
    maxWidth: 200,
  });
  var beachMarker76 = new google.maps.Marker({
    position: myLatLng76,
    title: "Храм Архангела Михаила в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker76, "click", function () {
    infowindow76.open(map, beachMarker76);
  });

  var myLatLng77 = new google.maps.LatLng(53.906106, 27.470351);
  var infowindow77 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-vseh-skorbjashih-radost-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Всех скорбящих Радость» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Притыцкого, д. 65</div>',
    maxWidth: 200,
  });
  var beachMarker77 = new google.maps.Marker({
    position: myLatLng77,
    title: "Храм иконы Божией Матери «Всех скорбящих Радость» в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker77, "click", function () {
    infowindow77.open(map, beachMarker77);
  });

  var myLatLng78 = new google.maps.LatLng(53.90501, 27.556181);
  var infowindow78 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/svjato-duhov-kafedralnyj-sobor-v-gorode-minske" style="font-weight: bold;">Свято-Духов кафедральный собор города Минска</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Кирилла и Мефодия, 3</div>',
    maxWidth: 200,
  });
  var beachMarker78 = new google.maps.Marker({
    position: myLatLng78,
    title: "Свято-Духов кафедральный собор города Минска",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker78, "click", function () {
    infowindow78.open(map, beachMarker78);
  });

  var myLatLng79 = new google.maps.LatLng(53.911275, 27.559037);
  var infowindow79 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vo-imja-apostola-i-evangelista-ioanna-bogoslova-pri-minskom-suvorovskom-uchilishe" style="font-weight: bold;">Храм апостола и евангелиста Иоанна Богослова при Минском суворовском училище</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Максима Богдановича, 29</div>',
    maxWidth: 200,
  });
  var beachMarker79 = new google.maps.Marker({
    position: myLatLng79,
    title:
      "Храм апостола и евангелиста Иоанна Богослова при Минском суворовском училище",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker79, "click", function () {
    infowindow79.open(map, beachMarker79);
  });

  var myLatLng80 = new google.maps.LatLng(53.905529, 27.547163);
  var infowindow80 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/domovoj-hram-v-chest-sobora-belorusskih-svjatyh-pri-minskom-eparhialnom-upravlenii" style="font-weight: bold;">Домовой храм в честь Собора Белорусских святых при Минском епархиальном управлении</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Освобождения, 10</div>',
    maxWidth: 200,
  });
  var beachMarker80 = new google.maps.Marker({
    position: myLatLng80,
    title:
      "Домовой храм в честь Собора Белорусских святых при Минском епархиальном управлении",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker80, "click", function () {
    infowindow80.open(map, beachMarker80);
  });

  var myLatLng81 = new google.maps.LatLng(54.354895, 26.346212);
  var infowindow81 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/vvedenskij-stavropigialnyj-zhenskij-monastyr-v-derevne-bogushi" style="font-weight: bold;">Введенский ставропигиальный женский монастырь в деревне Богуши</a><hr style="margin:5px 0"><i>Адрес:</i> Гродненская область, Сморгонский район, д. Богуши, 12</div>',
    maxWidth: 200,
  });
  var beachMarker81 = new google.maps.Marker({
    position: myLatLng81,
    title: "Введенский ставропигиальный женский монастырь в деревне Богуши",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker81, "click", function () {
    infowindow81.open(map, beachMarker81);
  });

  var myLatLng82 = new google.maps.LatLng(53.905658, 27.556055);
  var infowindow82 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-kirilla-turovskogo-v-gorode-minske" style="font-weight: bold;">Домовой храм святителя Кирилла Туровского Минской духовной академии</a><hr style="margin:5px 0"><i>Адрес:</i> Минск, ул. Кирилла и Мефодия, 3</div>',
    maxWidth: 200,
  });
  var beachMarker82 = new google.maps.Marker({
    position: myLatLng82,
    title:
      "Домовой храм святителя Кирилла Туровского Минской духовной академии",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker82, "click", function () {
    infowindow82.open(map, beachMarker82);
  });

  var myLatLng83 = new google.maps.LatLng(53.677122, 23.826386);
  var infowindow83 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/rozhdestvo-bogorodichnyj-stavropigialnyj-zhenskij-monastyr-v-gorode-grodno" style="font-weight: bold;">Рождество-Богородичный ставропигиальный женский монастырь в городе Гродно</a><hr style="margin:5px 0"><i>Адрес:</i> г. Гродно, ул. Д. Городенского, 3</div>',
    maxWidth: 200,
  });
  var beachMarker83 = new google.maps.Marker({
    position: myLatLng83,
    title:
      "Рождество-Богородичный ставропигиальный женский монастырь в городе Гродно",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker83, "click", function () {
    infowindow83.open(map, beachMarker83);
  });

  var myLatLng84 = new google.maps.LatLng(53.956115, 27.538798);
  var infowindow84 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/elisavetinskij-zhenskij-monastyr-v-gorode-minske" style="font-weight: bold;">Елисаветинский женский монастырь в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Выготского, 6</div>',
    maxWidth: 200,
  });
  var beachMarker84 = new google.maps.Marker({
    position: myLatLng84,
    title: "Елисаветинский женский монастырь в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker84, "click", function () {
    infowindow84.open(map, beachMarker84);
  });

  var myLatLng85 = new google.maps.LatLng(53.014737, 25.344534);
  var infowindow85 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/uspenskij-zhirovichskij-stavropigialnyj-muzhskoj-monastyr" style="font-weight: bold;">Успенский Жировичский ставропигиальный мужской монастырь</a><hr style="margin:5px 0"><i>Адрес:</i> Гродненская область, Слонимский район, а.г. Жировичи, ул. Соборная 57</div>',
    maxWidth: 200,
  });
  var beachMarker85 = new google.maps.Marker({
    position: myLatLng85,
    title: "Успенский Жировичский ставропигиальный мужской монастырь",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker85, "click", function () {
    infowindow85.open(map, beachMarker85);
  });

  var myLatLng86 = new google.maps.LatLng(55.495398, 28.769619);
  var infowindow86 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/polockij-spaso-evfrosinievskij-stavropigialnyj-zhenskij-monastyr" style="font-weight: bold;">Полоцкий Спасо-Евфросиниевский ставропигиальный женский монастырь</a><hr style="margin:5px 0"><i>Адрес:</i> г. Полоцк,  ул. Евфросинии Полоцкой, 89</div>',
    maxWidth: 200,
  });
  var beachMarker86 = new google.maps.Marker({
    position: myLatLng86,
    title: "Полоцкий Спасо-Евфросиниевский ставропигиальный женский монастырь",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker86, "click", function () {
    infowindow86.open(map, beachMarker86);
  });

  var myLatLng87 = new google.maps.LatLng(53.874025, 27.696103);
  var infowindow87 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/prihod-hrama-rozhdestva-hristova-der-bolshoe-stiklevo" style="font-weight: bold;">Приход храма Рождества Христова дер. Большое  Стиклево</a><hr style="margin:5px 0"><i>Адрес:</i> Минский р-н, д. Большое Стиклево, ул. Восточная 1</div>',
    maxWidth: 200,
  });
  var beachMarker87 = new google.maps.Marker({
    position: myLatLng87,
    title: "Приход храма Рождества Христова дер. Большое  Стиклево",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker87, "click", function () {
    infowindow87.open(map, beachMarker87);
  });

  var myLatLng88 = new google.maps.LatLng(53.786178, 27.440743);
  var infowindow88 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/prihod-hrama-rozhdestva-presvjatoj-bogorodicy-d-priluki" style="font-weight: bold;">Приход храма Рождества Пресвятой Богородицы  д. Прилуки</a><hr style="margin:5px 0"><i>Адрес:</i> Минский р-н, д. Прилуки, ул. Больничная, 8</div>',
    maxWidth: 200,
  });
  var beachMarker88 = new google.maps.Marker({
    position: myLatLng88,
    title: "Приход храма Рождества Пресвятой Богородицы  д. Прилуки",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker88, "click", function () {
    infowindow88.open(map, beachMarker88);
  });

  var myLatLng89 = new google.maps.LatLng(53.842083, 27.392928);
  var infowindow89 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-v-chest-muchenic-very-nadezhdy-i-ljubovi-i-materi-ih-sofii" style="font-weight: bold;">Храм в честь мучениц Веры, Надежды и Любови и матери их Софии в деревне Озерцо</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Озерцо, угол улиц Школьной и Звездной</div>',
    maxWidth: 200,
  });
  var beachMarker89 = new google.maps.Marker({
    position: myLatLng89,
    title:
      "Храм в честь мучениц Веры, Надежды и Любови и матери их Софии в деревне Озерцо",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker89, "click", function () {
    infowindow89.open(map, beachMarker89);
  });

  var myLatLng90 = new google.maps.LatLng(53.87527, 27.504865);
  var infowindow90 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatogo-pravednogo-strastoterpca-evgenija-botkina-prihoda-ikony-bozhiej-materi-vsecarica" style="font-weight: bold;">Храм святого праведного страстотерпца Евгения Боткина (прихода иконы Божией Матери «Всецарица»)</a><hr style="margin:5px 0"><i>Адрес:</i> Минск, ул. Железнодорожная</div>',
    maxWidth: 200,
  });
  var beachMarker90 = new google.maps.Marker({
    position: myLatLng90,
    title:
      "Храм святого праведного страстотерпца Евгения Боткина (прихода иконы Божией Матери «Всецарица»)",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker90, "click", function () {
    infowindow90.open(map, beachMarker90);
  });

  var myLatLng91 = new google.maps.LatLng(54.058065, 27.741834);
  var infowindow91 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-mlekopitatelnica-v-derevne-raubichi" style="font-weight: bold;">Храм иконы Божией Матери «Млекопитательница» в деревне Раубичи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Околица, ул. Шоссейная, 10</div>',
    maxWidth: 200,
  });
  var beachMarker91 = new google.maps.Marker({
    position: myLatLng91,
    title: "Храм иконы Божией Матери «Млекопитательница» в деревне Раубичи",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker91, "click", function () {
    infowindow91.open(map, beachMarker91);
  });

  var myLatLng92 = new google.maps.LatLng(53.806172, 27.607194);
  var infowindow92 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-presvjatoj-troicy-v-d-pashkovichi" style="font-weight: bold;">Храм Пресвятой Троицы в д. Пашковичи</a><hr style="margin:5px 0"><i>Адрес:</i> </div>',
    maxWidth: 200,
  });
  var beachMarker92 = new google.maps.Marker({
    position: myLatLng92,
    title: "Храм Пресвятой Троицы в д. Пашковичи",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker92, "click", function () {
    infowindow92.open(map, beachMarker92);
  });

  var myLatLng93 = new google.maps.LatLng();
  var infowindow93 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-spiridona-trimifuntskogo" style="font-weight: bold;">Храм святителя Спиридона Тримифунтского</a><hr style="margin:5px 0"><i>Адрес:</i> Минск, ул. Бурдейного, 22</div>',
    maxWidth: 200,
  });
  var beachMarker93 = new google.maps.Marker({
    position: myLatLng93,
    title: "Храм святителя Спиридона Тримифунтского",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker93, "click", function () {
    infowindow93.open(map, beachMarker93);
  });

  var myLatLng94 = new google.maps.LatLng(53.867969, 27.568179);
  var infowindow94 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-prepodobnogo-savvy-osvjashennogo-v-gorode-minske" style="font-weight: bold;">Храм преподобного Саввы Освященного в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> Минск, ул. Физкультурная, 26а</div>',
    maxWidth: 200,
  });
  var beachMarker94 = new google.maps.Marker({
    position: myLatLng94,
    title: "Храм преподобного Саввы Освященного в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker94, "click", function () {
    infowindow94.open(map, beachMarker94);
  });

  var myLatLng95 = new google.maps.LatLng();
  var infowindow95 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-kazanskoj-ikony-bozhiej-materi-v-g-minske" style="font-weight: bold;">Храм Казанской иконы Божией Матери в г. Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Есенина 68</div>',
    maxWidth: 200,
  });
  var beachMarker95 = new google.maps.Marker({
    position: myLatLng95,
    title: "Храм Казанской иконы Божией Матери в г. Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker95, "click", function () {
    infowindow95.open(map, beachMarker95);
  });

  var myLatLng96 = new google.maps.LatLng(
    53.93032495386907,
    27.483302352105326
  );
  var infowindow96 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vozdvizhenija-kresta-gospodnja-v-gorode-minske" style="font-weight: bold;">Храм Воздвижения Креста Господня в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> </div>',
    maxWidth: 200,
  });
  var beachMarker96 = new google.maps.Marker({
    position: myLatLng96,
    title: "Храм Воздвижения Креста Господня в городе Минске",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker96, "click", function () {
    infowindow96.open(map, beachMarker96);
  });

  var myLatLng97 = new google.maps.LatLng(53.953111, 27.676573);
  var infowindow97 = new google.maps.InfoWindow({
    content:
      '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-blagoveshenija-presvjatoj-bogorodicy-v-d-kopishe" style="font-weight: bold;">Храм Благовещения Пресвятой Богородицы в д. Копище</a><hr style="margin:5px 0"><i>Адрес:</i> Копище, ул. Лопатина, 17</div>',
    maxWidth: 200,
  });
  var beachMarker97 = new google.maps.Marker({
    position: myLatLng97,
    title: "Храм Благовещения Пресвятой Богородицы в д. Копище",
    map: map,
    icon: "/img/icons/church.png",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });
  google.maps.event.addListener(beachMarker97, "click", function () {
    infowindow97.open(map, beachMarker97);
  });

  var georssLayer = new google.maps.KmlLayer(
    "http://minsk.church.by//images/page/karta.kmz"
  );
  georssLayer.setMap(map);

  //var ctaLayer = new google.maps.KmlLayer({url: 'http://sluck.bu/images/page/slc.kml'});
  //ctaLayer.setMap(map);
}

// New React-specific function that doesn't create duplicate maps
export function initializeChurchMap(mapElement: HTMLElement) {
  const google = window.google;
  
  // Custom map styles
  var styles = [
    { featureType: "administrative", stylers: [{ visibility: "on" }] },
    { featureType: "poi", stylers: [{ visibility: "simplified" }] },
    { featureType: "road", stylers: [{ visibility: "simplified" }] },
    { featureType: "water", stylers: [{ visibility: "simplified" }] },
    { featureType: "transit", stylers: [{ visibility: "simplified" }] },
    { featureType: "landscape", stylers: [{ visibility: "simplified" }] },
    { featureType: "road.highway", stylers: [{ visibility: "on" }] },
    { featureType: "road.local", stylers: [{ visibility: "on" }] },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ visibility: "on" }],
    },
    { featureType: "road.arterial", stylers: [{ visibility: "on" }] },
    {
      featureType: "water",
      stylers: [{ color: "#5f94ff" }, { lightness: 26 }, { gamma: 5.86 }],
    },
    {},
    {
      featureType: "road.highway",
      stylers: [{ weight: 0.6 }, { saturation: -85 }, { lightness: 61 }],
    },
    { featureType: "road" },
    {},
    {
      featureType: "landscape",
      stylers: [{ hue: "#0066ff" }, { saturation: 74 }, { lightness: 100 }],
    },
  ];

  // Create map instance
  var mapOptions = {
    center: new google.maps.LatLng(53.947, 27.472),
    zoom: 9,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
  };
  
  var map = new google.maps.Map(mapElement, mapOptions);
  map.setOptions({ styles: styles });

  // Add all church markers
  addChurchMarkers(map);
  
  // Add KML layer
  var georssLayer = new google.maps.KmlLayer(
    "http://minsk.church.by//images/page/karta.kmz"
  );
  georssLayer.setMap(map);
  
  return map;
}

function addChurchMarkers(map: any) {
  const google = window.google;
  
  // Church data - coordinates, titles, and info window content
  const churches = [
    {
      position: { lat: 53.904682, lng: 27.55168 },
      title: "Петро-Павловский собор в городе Минске",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/petro-pavlovskij-sobor-goroda-minska" style="font-weight: bold;">Петро-Павловский собор в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Раковская, 4</div>'
    },
    {
      position: { lat: 53.923217, lng: 27.516304 },
      title: "Храм преподобного Иоанна Рыльского прихода праведного Иоанна Кронштадтского в городе Минске",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pravednogo-ioanna-kronshtadtskogo-v-gorode-minske" style="font-weight: bold;">Храм преподобного Иоанна Рыльского прихода праведного Иоанна Кронштадтского в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Саперов, д. 5</div>'
    },
    {
      position: { lat: 53.937896, lng: 27.493927 },
      title: "Храм Покрова Пресвятой Богородицы в городе Минске",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pokrova-presvjatoj-bogorodicy-v-gorode-minske" style="font-weight: bold;">Храм Покрова Пресвятой Богородицы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр-т Победителей, 82</div>'
    },
    {
      position: { lat: 53.916016, lng: 27.553674 },
      title: "Храм равноапостольной Марии Магдалины в городе Минске",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ravnoapostolnoj-marii-magdaliny-v-gorode-minske" style="font-weight: bold;">Храм равноапостольной Марии Магдалины в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Киселева, 42</div>'
    },
    {
      position: { lat: 53.905658, lng: 27.556055 },
      title: "Свято-Духов кафедральный собор города Минска",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/svjato-duhov-kafedralnyj-sobor-v-gorode-minske" style="font-weight: bold;">Свято-Духов кафедральный собор города Минска</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Кирилла и Мефодия, 3</div>'
    },
    {
      position: { lat: 53.902784, lng: 27.564444 },
      title: "Храм равноапостольных Мефодия и Кирилла в городе Минске",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ravnoapostolnyh-mefodija-i-kirilla-v-gorode-minske" style="font-weight: bold;">Храм равноапостольных Мефодия и Кирилла в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. Независимости, 26</div>'
    },
    {
      position: { lat: 53.908571, lng: 27.587405 },
      title: "Храм благоверного князя Александра Невского в городе Минске",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-blagovernogo-knjazja-aleksandra-nevskogo-v-gorode-minske" style="font-weight: bold;">Храм благоверного князя Александра Невского в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Козлова, 11</div>'
    },
    {
      position: { lat: 53.94052, lng: 27.616601 },
      title: "Храм Святой Живоначальной Троицы в городе Минске",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatoj-zhivonachalnoj-troicy-v-gorode-minske" style="font-weight: bold;">Храм Святой Живоначальной Троицы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Севастопольская, 100</div>'
    },
    {
      position: { lat: 53.951647, lng: 27.704747 },
      title: "Храм великомученика и целителя Пантелеимона в городе Минске",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-velikomuchenika-i-celitelja-panteleimona-v-gorode-minske" style="font-weight: bold;">Храм великомученика и целителя Пантелеимона в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. Независимости, 191</div>'
    },
    {
      position: { lat: 53.969078, lng: 27.58132 },
      title: "Храм Успения Пресвятой Богородицы в городе Минске",
      content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-uspenija-presvjatoj-bogorodicy-v-gorode-minske" style="font-weight: bold;">Храм Успения Пресвятой Богородицы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пересечение улицы Зеленолугская и переулка Боровецкий</div>'
    }
  ];

  // Create markers for each church
  churches.forEach((church, index) => {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(church.position.lat, church.position.lng),
      title: church.title,
      map: map,
      icon: "/img/icons/church.png",
      draggable: false,
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: church.content,
      maxWidth: 200,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
}
