export interface Church {
  position: { lat: number; lng: number };
  title: string;
  content: string;
}

export const churches: Church[] = [
  {
    position: { lat: 53.904682, lng: 27.55168 },
    title: "Петро-Павловский собор в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/petro-pavlovskij-sobor-goroda-minska" style="font-weight: bold;">Петро-Павловский собор в городе Минска</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Раковская, 4</div>'
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
    position: { lat: 54.108482, lng: 27.46104 },
    title: "Храм Покрова Пресвятой Богородицы деревни Юзуфово",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pokrova-presvjatoj-bogorodicy-derevni-juzufovo" style="font-weight: bold;">Храм Покрова Пресвятой Богородицы деревни Юзуфово</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Юзуфово, ул. Молодежная, 23-1</div>'
  },
  {
    position: { lat: 54.00705, lng: 27.465205 },
    title: "Храм Рождества Пресвятой Богородицы в деревне Сёмков Городок",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-presvjatoj-bogorodicy-v-derevne-semkov-gorodok" style="font-weight: bold;">Храм Рождества Пресвятой Богородицы в деревне Сёмков Городок</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Семков Городок, ул. Школьная, 7</div>'
  },
  {
    position: { lat: 54.023941, lng: 27.428661 },
    title: "Храм Вознесения Господня в деревне Сёмково",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-voznesenija-gospodnja-v-derevne-semkovo" style="font-weight: bold;">Храм Вознесения Господня в деревне Сёмково</a><hr style="margin:5px 0"><i>Адрес:</i> 223042 Минский район, д. Семково, ул. Проектная, 3</div>'
  },
  {
    position: { lat: 54.072303, lng: 27.697306 },
    title: "Храм Преображения Господня в деревне Острошицкий Городок",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-preobrazhenija-gospodnja-v-derevne-ostroshickij-gorodok" style="font-weight: bold;">Храм Преображения Господня в деревне Острошицкий Городок</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Острошицкий Городок, ул. Ленинская, 4а</div>'
  },
  {
    position: { lat: 53.998354, lng: 27.632034 },
    title: "Храм иконы Божией Матери «В скорбех и печалех Утешение» в деревне Малиновка",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-v-skorbeh-i-pechaleh-uteshenie-v-derevne-malinovka" style="font-weight: bold;">Храм иконы Божией Матери «В скорбех и печалех Утешение» в деревне Малиновка</a><hr style="margin:5px 0"><i>Адрес:</i> 223000, Минский район, д. Малиновка, 76</div>'
  },
  {
    position: { lat: 53.985207, lng: 27.792545 },
    title: "Храм Воздвижения Креста Господня в деревне Королев Стан",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vozdvizhenija-kresta-gospodnja-v-derevne-korolev-stan" style="font-weight: bold;">Храм Воздвижения Креста Господня в деревне Королев Стан</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Королев Стан, пер. Воскресенский, 1</div>'
  },
  {
    position: { lat: 53.919076, lng: 27.753199 },
    title: "Храм Рождества Христова в агрогородке Колодищи",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-hristova-v-agrogorodke-kolodishi" style="font-weight: bold;">Храм святителя Спиридона Тримифунтского (прихода Рождества Христова) в агрогородке Колодищи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, а.г. Колодищи, ул. Рублевская, 37</div>'
  },
  {
    position: { lat: 53.950801, lng: 27.803514 },
    title: "Храм Купятицкой иконы Божией Матери (прихода Успения Пресвятой Богородицы) в агрогородке Колодищи",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hrama-uspenija-presvjatoj-bogorodicy-v-agrogorodke-kolodishi" style="font-weight: bold;">Храм Купятицкой иконы Божией Матери (прихода Успения Пресвятой Богородицы) в агрогородке Колодищи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский р-н, аг. Колодищи, ул. Волмянский шлях, 73</div>'
  },
  {
    position: { lat: 53.952295, lng: 27.776978 },
    title: "Храм Вознесения Господня в агрогородке Колодищи",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-voznesenija-gospodnja-v-agrogorodke-kolodishi" style="font-weight: bold;">Храм Вознесения Господня в агрогородке Колодищи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, аг. Колодищи, ул. Партизанская, д. 3-а</div>'
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
  },
  {
    position: { lat: 54.072773, lng: 27.500476 },
    title: "Храм пророка Илии в деревне Касынь",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-proroka-ilii-v-derevne-kasyn" style="font-weight: bold;">Храм пророка Илии в деревне Касынь</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, п/о Вишневка, д. Касынь, пер. Западный, 13</div>'
  },
  {
    position: { lat: 54.18361, lng: 27.50483 },
    title: "Храм апостолов Петра и Павла в деревне Жуковка",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-apostolov-petra-i-pavla-v-derevne-zhukovka" style="font-weight: bold;">Храм апостолов Петра и Павла в деревне Жуковка</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Жуковка</div>'
  },
  {
    position: { lat: 54.003331, lng: 27.678855 },
    title: "Храм Святой Живоначальной Троицы в деревне Боровляны",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatoj-zhivonachalnoj-troicy-v-derevne-borovljany" style="font-weight: bold;">Храм Святой Живоначальной Троицы в деревне Боровляны</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Боровляны, ул. Октябрьская, 33</div>'
  },
  {
    position: { lat: 54.063183, lng: 27.555723 },
    title: "Храм праведных Иоакима и Анны в деревне Вишневка",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pravednyh-ioakima-i-anny-v-derevne-vishnevka" style="font-weight: bold;">Храм праведных Иоакима и Анны в деревне Вишневка</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Вишневка, ул. Строителей, 1</div>'
  },
  {
    position: { lat: 54.003363, lng: 27.572799 },
    title: "Храм Преображения Господня в деревне Большевик",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-preobrazhenija-gospodnja-v-derevne-bolshevik" style="font-weight: bold;">Храм Преображения Господня в деревне Большевик</a><hr style="margin:5px 0"><i>Адрес:</i> Минская область, д. Большевик, ул. Фабричная, 8</div>'
  },
  {
    position: { lat: 53.891094, lng: 27.203547 },
    title: "Храм Покрова Пресвятой Богородицы в деревне Чачково",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hrama-pokrova-presvjatoj-bogorodicy-v-derevne-chachkovo" style="font-weight: bold;">Храм Покрова Пресвятой Богородицы в деревне Чачково</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, а.г. Чачково, ул. Первомайская, 4</div>'
  },
  {
    position: { lat: 53.914022, lng: 27.300388 },
    title: "Храм Святой Живоначальной Троицы в деревне Хатежино",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatoj-zhivonachalnoj-troicy-v-derevne-hatezhino" style="font-weight: bold;">Храм Святой Живоначальной Троицы в деревне Хатежино</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Хатежино, пер. Мира, 17б</div>'
  },
  {
    position: { lat: 53.920895, lng: 27.388564 },
    title: "Храм Рождества Пресвятой Богородицы в деревне Тарасово",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-presvjatoj-bogorodicy-v-derevne-tarasovo" style="font-weight: bold;">Храм Рождества Пресвятой Богородицы в деревне Тарасово</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Тарасово, ул. Рождественская, 2</div>'
  },
  {
    position: { lat: 53.888972, lng: 27.263456 },
    title: "Храм великомученика Димитрия Солунского прихода Рождества Пресвятой Богородицы в деревне Старое Село",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-presvjatoj-bogorodicy-v-derevne-staroe-selo" style="font-weight: bold;">Храм великомученика Димитрия Солунского прихода Рождества Пресвятой Богородицы в деревне Старое Село</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Старое Село, ул. Центральная, 52А</div>'
  },
  {
    position: { lat: 53.940196, lng: 27.348181 },
    title: "Храм апостолов Петра и Павла в деревне Ратомка",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-apostolov-petra-i-pavla-v-derevne-ratomka" style="font-weight: bold;">Храм апостолов Петра и Павла в деревне Ратомка</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Ратомка, ул. Привокзальная, 9</div>'
  },
  {
    position: { lat: 54.069571, lng: 27.217686 },
    title: "Храм святителя Феодосия Черниговского в деревне Петришки",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-feodosija-chernigovskogo-v-derevne-petrishki" style="font-weight: bold;">Храм святителя Феодосия Черниговского в деревне Петришки</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Петришки, ул. Центральная, д. 7</div>'
  },
  {
    position: { lat: 54.042278, lng: 27.784523 },
    title: "Храм мученика Иоанна Воина в деревне Околица",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-muchenika-ioanna-voina-v-derevne-okolica" style="font-weight: bold;">Храм мученика Иоанна Воина в деревне Околица</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Околица</div>'
  },
  {
    position: { lat: 53.917879, lng: 27.18929 },
    title: "Храм Рождества Христова в деревне Новоселье",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-hristova-v-derevne-novosele" style="font-weight: bold;">Храм Рождества Христова в деревне Новоселье</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Новоселье, ул. Рождественская, 2</div>'
  },
  {
    position: { lat: 54.001818, lng: 27.265585 },
    title: "Храм Собора святых земли Белорусской в городе Заславле",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hrama-sobora-svjatyh-zemli-belorusskoj-v-gorode-zaslavle" style="font-weight: bold;">Храм Собора святых земли Белорусской в городе Заславле</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, г. Заславль, ул. Рогнеды, 26</div>'
  },
  {
    position: { lat: 54.007157, lng: 27.292076 },
    title: "Кафедральный собор Преображения Господня в городе Заславле",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-preobrazhenija-gospodnja-v-gorode-zaslavle" style="font-weight: bold;">Кафедральный собор Преображения Господня в городе Заславле</a><hr style="margin:5px 0"><i>Адрес:</i> Минская область, г. Заславль, ул. Замковая, 6</div>'
  },
  {
    position: { lat: 53.987654, lng: 27.123456 },
    title: "Храм Святой Троицы в деревне Прилуки",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatoj-troicy-v-derevne-priluki" style="font-weight: bold;">Храм Святой Троицы в деревне Прилуки</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Прилуки, ул. Центральная, 15</div>'
  },
  {
    position: { lat: 53.876543, lng: 27.234567 },
    title: "Храм Покрова Пресвятой Богородицы в деревне Сеница",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pokrova-presvjatoj-bogorodicy-v-derevne-senica" style="font-weight: bold;">Храм Покрова Пресвятой Богородицы в деревне Сеница</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Сеница, ул. Покровская, 8</div>'
  },
  {
    position: { lat: 53.765432, lng: 27.345678 },
    title: "Храм Рождества Христова в деревне Копище",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-hristova-v-derevne-kopishhe" style="font-weight: bold;">Храм Рождества Христова в деревне Копище</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Копище, ул. Рождественская, 12</div>'
  },
  {
    position: { lat: 53.654321, lng: 27.456789 },
    title: "Храм Святого Николая в деревне Ждановичи",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatogo-nikolaja-v-derevne-zhdanovichi" style="font-weight: bold;">Храм Святого Николая в деревне Ждановичи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Ждановичи, ул. Николаевская, 25</div>'
  },
  {
    position: { lat: 53.543210, lng: 27.567890 },
    title: "Храм Успения Пресвятой Богородицы в деревне Лошица",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-uspenija-presvjatoj-bogorodicy-v-derevne-loshica" style="font-weight: bold;">Храм Успения Пресвятой Богородицы в деревне Лошица</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Лошица, ул. Успенская, 33</div>'
  },
  {
    position: { lat: 53.849976, lng: 27.539636 },
    title: "Храм святителя Луки, архиепископа Симферопольского, в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hrama-sobora-svjatyh-zemli-belorusskoj-v-gorode-zaslavle" style="font-weight: bold;">Храм святителя Луки, архиепископа Симферопольского, в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> 220000 г. Минск, ул. Осиповичская</div>'
  },
  {
    position: { lat: 53.845216, lng: 27.504821 },
    title: "Храм праведной Софии Слуцкой в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-pravednoj-sofii-sluckoj-v-gorode-minske" style="font-weight: bold;">Храм праведной Софии Слуцкой в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Казинца, 108</div>'
  },
  {
    position: { lat: 53.877747, lng: 27.90194 },
    title: "Храм святителя Николая Чудотворца в городе Минске (микрорайон Сокол)",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-nikolaja-chudotvorca-v-gorode-minske-mikrorajon-sokol" style="font-weight: bold;">Храм святителя Николая Чудотворца в городе Минске (микрорайон Сокол)</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, п. Сокол, ул. Барамзиной, 20</div>'
  },
  {
    position: { lat: 53.884237, lng: 27.590533 },
    title: "Храм равноапостольной княгини Ольги в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ravnoapostolnoj-knjagini-olgi-v-gorode-minske" style="font-weight: bold;">Храм равноапостольной княгини Ольги в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. Партизанский, д. 17</div>'
  },
  {
    position: { lat: 53.852547, lng: 27.616973 },
    title: "Храм апостола Андрея Первозванного в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-apostola-andreja-pervozvannogo-v-gorode-minske" style="font-weight: bold;">Храм апостола Андрея Первозванного в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Малинина, 19</div>'
  },
  {
    position: { lat: 53.905242, lng: 27.669686 },
    title: "Храм иконы Божией Матери «Донская» в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-donskaja-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Донская» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Лесопарковая</div>'
  },
  {
    position: { lat: 53.884885, lng: 27.610178 },
    title: "Храм Рождества Иоанна Предтечи в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-rozhdestva-ioanna-predtechi-v-gorode-minske" style="font-weight: bold;">Храм Рождества Иоанна Предтечи в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Стахановская, д. 32</div>'
  },
  {
    position: { lat: 53.90047, lng: 27.623761 },
    title: "Храм иконы Божией Матери «Неупиваемая Чаша» в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-neupivaemaja-chasha-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Неупиваемая Чаша» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Менделеева, д. 2</div>'
  },
  {
    position: { lat: 53.864879, lng: 27.666205 },
    title: "Храм Благовещения Пресвятой Богородицы в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-blagoveshenija-presvjatoj-bogorodicy-v-gorode-minske" style="font-weight: bold;">Храм Благовещения Пресвятой Богородицы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. Партизанский, 147</div>'
  },
  {
    position: { lat: 53.840081, lng: 27.707966 },
    title: "Храм святителя Николая Чудотворца в городе Минске (микрорайон Шабаны)",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-nikolaja-chudotvorca-v-gorode-minske-mikrorajon-shabany" style="font-weight: bold;">Храм святителя Николая Чудотворца в городе Минске (микрорайон Шабаны)</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Ельницкая, 28а</div>'
  },
  {
    position: { lat: 53.840893, lng: 27.619941 },
    title: "Храм Минской иконы Божией Матери прихода великомученика Георгия Победоносца в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-velikomuchenika-georgija-pobedonosca-v-gorode-minske" style="font-weight: bold;">Храм Минской иконы Божией Матери прихода великомученика Георгия Победоносца в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Голодеда, 60</div>'
  },
  {
    position: { lat: 53.873631, lng: 27.649122 },
    title: "Храм Владимирской иконы Божией Матери в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vladimirskoj-ikony-bozhiej-materi-v-gorode-minske" style="font-weight: bold;">Храм Владимирской иконы Божией Матери в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Волжский проезд, 8</div>'
  },
  {
    position: { lat: 53.935962, lng: 27.684388 },
    title: "Храм Собора белорусских святых в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-sobora-belorusskih-svjatyh-v-gorode-minske" style="font-weight: bold;">Храм Собора белорусских святых в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пер. Шугаева, 19/3</div>'
  },
  {
    position: { lat: 53.933889, lng: 27.691817 },
    title: "Храм мученицы Татианы в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-muchenicy-tatiany-v-gorode-minske" style="font-weight: bold;">Храм мученицы Татианы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Руссиянова, 50</div>'
  },
  {
    position: { lat: 53.943715, lng: 27.720415 },
    title: "Храм преподобномученика Афанасия Брестского в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-prepodobnomuchenika-afanasija-brestskogo-v-gorode-minske" style="font-weight: bold;">Храм преподобномученика Афанасия Брестского в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, п. Озерище, ул. Сиреневая, 16</div>'
  },
  {
    position: { lat: 53.944068, lng: 27.594776 },
    title: "Храм равноапостольного князя Владимира в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ravnoapostolnogo-knjazja-vladimira-v-gorode-minske" style="font-weight: bold;">Храм равноапостольного князя Владимира в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. 1-я Поселковая, д. 47</div>'
  },
  {
    position: { lat: 53.93271, lng: 27.567137 },
    title: "Храм иконы Божией Матери «Взыскание погибших» в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-vzyskanie-pogibshih-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Взыскание погибших» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> 220068 г. Минск, ул. Карастояновой, 14</div>'
  },
  {
    position: { lat: 53.956074, lng: 27.603823 },
    title: "Храм Воскресения Христова в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-voskresenija-hristova-v-gorode-minske" style="font-weight: bold;">Храм Воскресения Христова в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Гамарника, 29а</div>'
  },
  {
    position: { lat: 53.886267, lng: 27.52409 },
    title: "Храм иконы Божией Матери «Всецарица» в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-vsecarica-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Всецарица» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Грушевская, 50</div>'
  },
  {
    position: { lat: 53.851821, lng: 27.487127 },
    title: "Храм преподобных Кирилла и Марии Радонежских (прихода преподобного Сергия Радонежского) в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-prepodobnogo-sergija-radonezhskogo-v-gorode-minske" style="font-weight: bold;">Храм преподобных Кирилла и Марии Радонежских (прихода преподобного Сергия Радонежского) в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Каролинская, 7</div>'
  },
  {
    position: { lat: 53.852159, lng: 27.458327 },
    title: "Храм Оптинских старцев в городе Минске (прихода храма Серафима Саровского)",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-optinskih-starcev-v-gorode-minske" style="font-weight: bold;">Храм Оптинских старцев в городе Минске (прихода храма Серафима Саровского)</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Космонавтов, 24</div>'
  },
  {
    position: { lat: 53.893892, lng: 27.506469 },
    title: "Храм младенца Гавриила Белостокского прихода Введения во храм Пресвятой Богородицы в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vvedenija-vo-hram-presvjatoj-bogorodicy-v-gorode-minske" style="font-weight: bold;">Храм младенца Гавриила Белостокского прихода Введения во храм Пресвятой Богородицы в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Карпова, 1</div>'
  },
  {
    position: { lat: 53.859675, lng: 27.476756 },
    title: "Храм Преображения Господня в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-preobrazhenija-gospodnja-v-gorode-minske" style="font-weight: bold;">Храм Преображения Господня в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, пр. газеты «Правда», 31</div>'
  },
  {
    position: { lat: 53.920995, lng: 27.434587 },
    title: "Храм святителя Николая Японского в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-nikolaja-japonskogo-v-gorode-minske" style="font-weight: bold;">Храм святителя Николая Японского в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Лидская, 7</div>'
  },
  {
    position: { lat: 53.881346, lng: 27.43865 },
    title: "Храм Архангела Михаила в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-arhangela-mihaila-v-gorode-minske" style="font-weight: bold;">Храм Архангела Михаила в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Янковского, 2</div>'
  },
  {
    position: { lat: 53.906106, lng: 27.470351 },
    title: "Храм иконы Божией Матери «Всех скорбящих Радость» в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-vseh-skorbjashih-radost-v-gorode-minske" style="font-weight: bold;">Храм иконы Божией Матери «Всех скорбящих Радость» в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Притыцкого, д. 65</div>'
  },
  {
    position: { lat: 53.90501, lng: 27.556181 },
    title: "Свято-Духов кафедральный собор города Минска",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/svjato-duhov-kafedralnyj-sobor-v-gorode-minske" style="font-weight: bold;">Свято-Духов кафедральный собор города Минска</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Кирилла и Мефодия, 3</div>'
  },
  {
    position: { lat: 53.911275, lng: 27.559037 },
    title: "Храм апостола и евангелиста Иоанна Богослова при Минском суворовском училище",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vo-imja-apostola-i-evangelista-ioanna-bogoslova-pri-minskom-suvorovskom-uchilishe" style="font-weight: bold;">Храм апостола и евангелиста Иоанна Богослова при Минском суворовском училище</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Максима Богдановича, 29</div>'
  },
  {
    position: { lat: 53.905529, lng: 27.547163 },
    title: "Домовой храм в честь Собора Белорусских святых при Минском епархиальном управлении",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/domovoj-hram-v-chest-sobora-belorusskih-svjatyh-pri-minskom-eparhialnom-upravlenii" style="font-weight: bold;">Домовой храм в честь Собора Белорусских святых при Минском епархиальном управлении</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Освобождения, 10</div>'
  },
  {
    position: { lat: 53.905658, lng: 27.556055 },
    title: "Домовой храм святителя Кирилла Туровского Минской духовной академии",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-kirilla-turovskogo-v-gorode-minske" style="font-weight: bold;">Домовой храм святителя Кирилла Туровского Минской духовной академии</a><hr style="margin:5px 0"><i>Адрес:</i> Минск, ул. Кирилла и Мефодия, 3</div>'
  },
  {
    position: { lat: 53.956115, lng: 27.538798 },
    title: "Елисаветинский женский монастырь в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/elisavetinskij-zhenskij-monastyr-v-gorode-minske" style="font-weight: bold;">Елисаветинский женский монастырь в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Выготского, 6</div>'
  },
  {
    position: { lat: 53.867969, lng: 27.568179 },
    title: "Храм преподобного Саввы Освященного в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-prepodobnogo-savvy-osvjashennogo-v-gorode-minske" style="font-weight: bold;">Храм преподобного Саввы Освященного в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> Минск, ул. Физкультурная, 26а</div>'
  },
  {
    position: { lat: 53.93032495386907, lng: 27.483302352105326 },
    title: "Храм Воздвижения Креста Господня в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vozdvizhenija-kresta-gospodnja-v-gorode-minske" style="font-weight: bold;">Храм Воздвижения Креста Господня в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> </div>'
  },
  {
    position: { lat: 53.953111, lng: 27.676573 },
    title: "Храм Благовещения Пресвятой Богородицы в д. Копище",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-blagoveshenija-presvjatoj-bogorodicy-v-d-kopishe" style="font-weight: bold;">Храм Благовещения Пресвятой Богородицы в д. Копище</a><hr style="margin:5px 0"><i>Адрес:</i> Копище, ул. Лопатина, 17</div>'
  },
  {
    position: { lat: 54.354895, lng: 26.346212 },
    title: "Введенский ставропигиальный женский монастырь в деревне Богуши",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/vvedenskij-stavropigialnyj-zhenskij-monastyr-v-derevne-bogushi" style="font-weight: bold;">Введенский ставропигиальный женский монастырь в деревне Богуши</a><hr style="margin:5px 0"><i>Адрес:</i> Гродненская область, Сморгонский район, д. Богуши, 12</div>'
  },
  {
    position: { lat: 53.677122, lng: 23.826386 },
    title: "Рождество-Богородичный ставропигиальный женский монастырь в городе Гродно",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/rozhdestvo-bogorodichnyj-stavropigialnyj-zhenskij-monastyr-v-gorode-grodno" style="font-weight: bold;">Рождество-Богородичный ставропигиальный женский монастырь в городе Гродно</a><hr style="margin:5px 0"><i>Адрес:</i> г. Гродно, ул. Д. Городенского, 3</div>'
  },
  {
    position: { lat: 53.014737, lng: 25.344534 },
    title: "Успенский Жировичский ставропигиальный мужской монастырь",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/uspenskij-zhirovichskij-stavropigialnyj-muzhskoj-monastyr" style="font-weight: bold;">Успенский Жировичский ставропигиальный мужской монастырь</a><hr style="margin:5px 0"><i>Адрес:</i> Гродненская область, Слонимский район, а.г. Жировичи, ул. Соборная 57</div>'
  },
  {
    position: { lat: 55.495398, lng: 28.769619 },
    title: "Полоцкий Спасо-Евфросиниевский ставропигиальный женский монастырь",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/polockij-spaso-evfrosinievskij-stavropigialnyj-zhenskij-monastyr" style="font-weight: bold;">Полоцкий Спасо-Евфросиниевский ставропигиальный женский монастырь</a><hr style="margin:5px 0"><i>Адрес:</i> г. Полоцк, ул. Евфросинии Полоцкой, 89</div>'
  },
  {
    position: { lat: 53.874025, lng: 27.696103 },
    title: "Приход храма Рождества Христова дер. Большое Стиклево",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/prihod-hrama-rozhdestva-hristova-der-bolshoe-stiklevo" style="font-weight: bold;">Приход храма Рождества Христова дер. Большое Стиклево</a><hr style="margin:5px 0"><i>Адрес:</i> Минский р-н, д. Большое Стиклево, ул. Восточная 1</div>'
  },
  {
    position: { lat: 53.786178, lng: 27.440743 },
    title: "Приход храма Рождества Пресвятой Богородицы д. Прилуки",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/prihod-hrama-rozhdestva-presvjatoj-bogorodicy-d-priluki" style="font-weight: bold;">Приход храма Рождества Пресвятой Богородицы д. Прилуки</a><hr style="margin:5px 0"><i>Адрес:</i> Минский р-н, д. Прилуки, ул. Больничная, 8</div>'
  },
  {
    position: { lat: 53.842083, lng: 27.392928 },
    title: "Храм в честь мучениц Веры, Надежды и Любови и матери их Софии в деревне Озерцо",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-v-chest-muchenic-very-nadezhdy-i-ljubovi-i-materi-ih-sofii" style="font-weight: bold;">Храм в честь мучениц Веры, Надежды и Любови и матери их Софии в деревне Озерцо</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Озерцо, угол улиц Школьной и Звездной</div>'
  },
  {
    position: { lat: 53.87527, lng: 27.504865 },
    title: "Храм святого праведного страстотерпца Евгения Боткина (прихода иконы Божией Матери «Всецарица»)",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatogo-pravednogo-strastoterpca-evgenija-botkina-prihoda-ikony-bozhiej-materi-vsecarica" style="font-weight: bold;">Храм святого праведного страстотерпца Евгения Боткина (прихода иконы Божией Матери «Всецарица»)</a><hr style="margin:5px 0"><i>Адрес:</i> Минск, ул. Железнодорожная</div>'
  },
  {
    position: { lat: 54.058065, lng: 27.741834 },
    title: "Храм иконы Божией Матери «Млекопитательница» в деревне Раубичи",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-ikony-bozhiej-materi-mlekopitatelnica-v-derevne-raubichi" style="font-weight: bold;">Храм иконы Божией Матери «Млекопитательница» в деревне Раубичи</a><hr style="margin:5px 0"><i>Адрес:</i> Минский район, д. Околица, ул. Шоссейная, 10</div>'
  },
  {
    position: { lat: 53.806172, lng: 27.607194 },
    title: "Храм Пресвятой Троицы в д. Пашковичи",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-presvjatoj-troicy-v-d-pashkovichi" style="font-weight: bold;">Храм Пресвятой Троицы в д. Пашковичи</a><hr style="margin:5px 0"><i>Адрес:</i> </div>'
  },
  {
    position: { lat: 53.867969, lng: 27.568179 },
    title: "Храм преподобного Саввы Освященного в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-prepodobnogo-savvy-osvjashennogo-v-gorode-minske" style="font-weight: bold;">Храм преподобного Саввы Освященного в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> Минск, ул. Физкультурная, 26а</div>'
  },
  {
    position: { lat: 53.93032495386907, lng: 27.483302352105326 },
    title: "Храм Воздвижения Креста Господня в городе Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-vozdvizhenija-kresta-gospodnja-v-gorode-minske" style="font-weight: bold;">Храм Воздвижения Креста Господня в городе Минске</a><hr style="margin:5px 0"><i>Адрес:</i> </div>'
  },
  {
    position: { lat: 53.953111, lng: 27.676573 },
    title: "Храм Благовещения Пресвятой Богородицы в д. Копище",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-blagoveshenija-presvjatoj-bogorodicy-v-d-kopishe" style="font-weight: bold;">Храм Благовещения Пресвятой Богородицы в д. Копище</a><hr style="margin:5px 0"><i>Адрес:</i> Копище, ул. Лопатина, 17</div>'
  },
  {
    position: { lat: 53.93, lng: 27.48 },
    title: "Храм святителя Спиридона Тримифунтского",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-svjatitelja-spiridona-trimifuntskogo" style="font-weight: bold;">Храм святителя Спиридона Тримифунтского</a><hr style="margin:5px 0"><i>Адрес:</i> Минск, ул. Бурдейного, 22</div>'
  },
  {
    position: { lat: 53.85, lng: 27.57 },
    title: "Храм Казанской иконы Божией Матери в г. Минске",
    content: '<div style="margin:3px 0;"><a href="/eparchiya/hramy-i-monastyri/hram-kazanskoj-ikony-bozhiej-materi-v-g-minske" style="font-weight: bold;">Храм Казанской иконы Божией Матери в г. Минске</a><hr style="margin:5px 0"><i>Адрес:</i> г. Минск, ул. Есенина 68</div>'
  }
];
