//////////////////////////////////////////////////////////////////////////
//
// Создание виртуального драйвера
//
//  Модуль тёплых полов 
//
////////////////////////////////////////////////////////////////////////////////////

// Настройка модуля 

// Переменные 
var _fh_namber="Sleeping";
var _fh_condition="wb-msw-v4_104/Temperature";   // Адрес датчика температуры 
var _fh_frequency=10000;   // частота в мс.
var _fh_rele="_wb-mr6cu_145/K2";  // !!!!!!!!!!!!!!!!!!!!!!!!!!
var _fh_delta=1;         // Delta
var timer_id_fh1 
var _fh_frequency=10000;   // частота в мс.

//
var _fh_set="fh_"+_fh_namber+"/Ust_temp";      // Название и порядковый номер модуля !!! не должны повторяться в рамках одного прибора !!!   Уставка
var _fh_ON_OFF="fh_"+_fh_namber+"/switch";   // Название и порядковый номер модуля !!! не должны повторяться в рамках одного прибора !!!   Включение / Выключение 
var _fh_HF_UP="fh_"+_fh_namber+"/temp_up";
var _fh_HF_DN="fh_"+_fh_namber+"/temp_dn";
var _fh_value="fh_"+_fh_namber+"/value";


/////


var _fh_set="fh_"+_fh_namber+"/Ust";      // Название и порядковый номер модуля !!! не должны повторяться в рамках одного прибора !!!   Уставка
var _fh_ON_OFF="fh_"+_fh_namber+"/switch";   // Название и порядковый номер модуля !!! не должны повторяться в рамках одного прибора !!!   Включение / Выключение 
var _fh_HF_UP="fh_"+_fh_namber+"/up";
var _fh_HF_DN="fh_"+_fh_namber+"/dn";


defineVirtualDevice("fh_"+_fh_namber,  {  // Название и порядковый номер модуля !!! не должны повторяться в рамках одного прибора !!!
  
  title: "Отопление в "+_fh_namber,
 	cells: {
    
      switch: {
        title: "ON/OFF",
		   type: "switch",
		  value: false

        },// switch
      Ust: {
        title: "Уставка температуры",
		type: "range",
	    value: 24,
        max: 32,
        min: 18

        },// range
    config: {
        title: "Сonfig",
		   type: "switch",
		  value: false
        },// switch
up: {
        title: "ON/OFF",
		   type: "switch",
		  value: false
        },// switch
dn: {
        title: "ON/OFF",
		   type: "switch",
		  value: false
        },// switch

    value: {
        title: "Текущая температура",
		type: "value",
      value: 20,
	    },// Текущая температура
  
      
        }  // calls  
});    //      floor_heating1



  defineRule({
    whenChanged: _fh_HF_UP,
   then: function (newValue, devName, cellName) {
        log ("Увеличиваем уставку  тёплых полов в {} , Температура  = {}, Уставка = {}  , timer_id_fh1 {} ",_fh_namber,dev[_fh_condition], dev[_fh_set], timer_id_fh1 );
        if (dev[_fh_set] > 31 ) {
           dev[_fh_set]=32; 
             }
        else {
          dev[_fh_set]=dev[_fh_set]+1;
        }
      }
        });
  

  defineRule({
    whenChanged: _fh_HF_DN,
   then: function (newValue, devName, cellName) {
              log ("Увеличиваем уставку  тёплых полов в {} , Температура  = {}, Уставка = {}  , timer_id_fh1 {} ",_fh_namber,dev[_fh_condition], dev[_fh_set], timer_id_fh1 );
        if (dev[_fh_set] < 19 ) {
           dev[_fh_set]=18; 
          }
        else {
          dev[_fh_set]=dev[_fh_set]-1;
        }
   }   
   });
  
// wb-msw-v4_104/Temperature

  defineRule({
    whenChanged: _fh_condition,

    then: function (newValue, devName, cellName) {
        log ("Изменилась температура" );
              dev[_fh_value]=dev[_fh_condition];
        }
  });
  ////////////////


  defineRule({
    whenChanged:_fh_ON_OFF,
   then: function (newValue, devName, cellName) {
      if (newValue) {
        log ("Включаем модуль тёплых полов в {} , Температура  = {}, Уставка = {}  , timer_id_fh1 {} ",_fh_namber,dev[_fh_condition], dev[_fh_set], timer_id_fh1 );
        
       timer_id_fh1 = setInterval(function () {
          log("Проверка температуры тёплого пола в  {},  Температура = {}, Уставка = {} , timer_id_fh1 = {}", _fh_namber , dev[_fh_condition],dev[_fh_set] , timer_id_fh1 );
           if  (dev[ _fh_condition ] > dev[_fh_set]+_fh_delta) {
            log("Температура в {} выше уставки, выключаем реле ", _fh_namber);
            dev[_fh_rele]=false;
            return;
            }
          if  ( dev[ _fh_condition ] < dev[_fh_set]-_fh_delta) {
              dev[_fh_rele]=true;
              log("Температура в {} ниже уставки, включаем реле timer_id_fh1 {} ", _fh_namber,timer_id_fh1);
            
              return;
              }
        },_fh_frequency);

        return;
      }
  
      log ("Выключаем модуль тёплых полов в  {} , timer_id_fh1 {}", _fh_namber, timer_id_fh1);
         dev[_fh_rele]=false;
          clearTimeout (timer_id_fh1);
     }
   });
  