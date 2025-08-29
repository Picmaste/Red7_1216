//////////////////////////////////////////////////////////////////////////
//
// Создание виртуального драйвера
//
//  Модуль штор
//
////////////////////////////////////////////////////////////////////////////////////

// Настройка модуля 

// Переменные 
var _Name_of_room="Sleeping";
var timer_id_fh1 
var _fh_frequency=10000;   // частота в мс.


	var device_roll_Position="aok-am68_0x030100/Position"; 
	//var rele_up = "K1"
	//var rele_dn = "K2"
	var no_dubl = 0;
    
   var device_input_button_up = "wb-gpio/EXT1_IN6";
	 var device_input_button_dn = "wb-gpio/EXT1_IN7"


  
   var roll_condition=dev[_Name_of_room+"+_Blind/tag"];
   
	var _Room_tag =_Name_of_room+"_Blind/tag";
	var _Room_stop =_Name_of_room+"_Blind/stop";
	var _Room_dn =_Name_of_room+"_Blind/dn";
	var _Room_up =_Name_of_room+"_Blind/up";
  var _Room_plus=_Name_of_room+"_Blind/plus";
  var _Room_minus=_Name_of_room+"_Blind/minus";

	
  
defineVirtualDevice(_Name_of_room+"_Blind",  {
  title: _Name_of_room+"   Спальня Шторы ",
 	cells: {
    
      tag: {
        title: "tag",
		    type: "range",
	      value: 50,
        max: 100,
        min: 1
        },// tag

      0: {
        title: "Открвть полностью ",
		    type: "switch",
		    value: false
        },// 
    10: {
        title: "Открыть но 10% ",
		    type: "switch",
		    value: false
        },// 
    20: {
        title: "Открыть но 20% ",
		    type: "switch",
		    value: false
        },// 
    30: {
        title: "Открыть но 30% ",
		    type: "switch",
		    value: false
        },// 
    40: {
        title: "Открыть но 40% ",
		    type: "switch",
		    value: false
        },// 
    50: {
        title: "Открыть но 50% ",
		    type: "switch",
		    value: false
        },// 
    60: {
        title: "Открыть но 60% ",
		    type: "switch",
		    value: false
        },// 
    70: {
        title: "Открыть но 70% ",
		    type: "switch",
		    value: false
        },// 
    80: {
        title: "Открыть но 80% ",
		    type: "switch",
		    value: false
        },// 
    90: {
        title: "Открыть но 90% ",
		    type: "switch",
		    value: false
        },// 
    100: {
        title: "Открыть но 100% ",
		    type: "switch",
		    value: false
        },// 
      
      
      config: {
        title: "Управлени",
		    type: "switch",
		    value: false
        },// 
      plus: {
        title: "Roll UP",
		    type: "switch",
		    value: false
        },// up
       minus: {
        title: "Roll UP",
		    type: "switch",
		    value: false
        },// up
      
      up: {
        title: "Roll UP",
		    type: "switch",
		    value: false
        },// up
      stop: {
        title: "Roll STOP",
		    type: "switch",
	    	value: false
        },//stop
      dn: {
        title: "Roll DN",
		type: "switch",
		value: false
        },// dn
      
      delay_Timer: {
        title: "Время хода ",
			type: "range",
	    value: 20,
        max: 30,
        min: 10
        },// delay_Timer
            
     }  // calls  
});    //      

  defineRule({
    whenChanged: _Name_of_room+"_Blind/plus",
   then: function (newValue, devName, cellName) {
        log ("Увеличиваем уставку  штор " );
        if (dev[_Room_tag] > 90 ) {
          log ("Увеличиваем уставку  штор Уставка больше 90 " );
           dev[_Room_tag]=100; 
             }
        else {
          log ("Увеличиваем уставку  штор Уставка меньше 90 " );
          dev[_Room_tag]=dev[_Room_tag]+10;
        }
      }
        });
  
  defineRule({
    whenChanged: _Name_of_room+"_Blind/minus",
   then: function (newValue, devName, cellName) {
              log ("Уменьшаем уставку штор в " );
        if (dev[_Room_tag] < 11 ) {
           dev[_Room_tag]=1; 
          }
        else {
          dev[_Room_tag]=dev[_Room_tag]-10;
        }
   }   
   });




//**
//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/0",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/0");
      dev[_Room_tag]=0;
      }   
     });

//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/10",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/10");
      dev[_Room_tag]=10;
      }   
     });

//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/20",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/0");
      dev[_Room_tag]=20;
      }   
     });

//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/30",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/0");
      dev[_Room_tag]=30;
      }   
     });

//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/40",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/0");
      dev[_Room_tag]=40;
      }   
     });

//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/50",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/0");
      dev[_Room_tag]=50;
      }   
     });

//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/60",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/0");
      dev[_Room_tag]=60;
      }   
     });

//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/70",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/0");
      dev[_Room_tag]=70;
      }   
     });

//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/80",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/0");
      dev[_Room_tag]=80;
      }   
     });

//**  Set 0
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/90",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/0");
      dev[_Room_tag]=90;
      }   
     });

//**  Set 100
    
    defineRule({ 
    whenChanged: _Name_of_room+"_Blind/100",
   then: function (newValue, devName, cellName) {
   
     log(_Name_of_room+"_Blind/100");
      dev[_Room_tag]=100;
      }   
     });





   


    defineRule({
    whenChanged: _Room_tag,
   then: function (newValue, devName, cellName) {
	log("--- Меняем  значение штор  --");	
    	
    dev[device_roll_Position]=newValue;
     
   
        }   
    });
    
    
    //**
 /* 

 //**

    
    defineRule({
    whenChanged: "aok-am68_0x030100/Position",
   then: function (newValue, devName, cellName) {
	log("---Изменение положения штор --");	
    dev[_Room_tag]=newValue;
  
        }   
    });



 
    defineRule({
    whenChanged: _Room_stop,
   then: function (newValue, devName, cellName) {
     if (newValue) {
       log("Room1/rool_stop");
         dev["Room1/rool_stop"] = false;
         if (dev[device_input_button_dn] || dev[device_input_button_up] ){
         log("Room1/rool_stop  - Нажата одна из кнопок");
           return;
         }   
     
      	dev[device_roll][rele_dn] =  false;
      	dev[device_roll][rele_up] =  false;
       	timer2s_up = false;
		clearTimeout(timer_id);
      }   
   }   
  });

  defineRule({
    whenChanged: _Room_up,
   then: function (newValue, devName, cellName) {
    	
     if (newValue) {
         log("Room1_roll/up  - start ");
       	dev["Room1_roll/up"] = false;
         
       if ( dev[device_input_button_up] || dev[device_input_button_dn] ) {

         log("Room1_roll/up  - button press  ");
           return;
         }   
      if (dev[device_roll][rele_up] ){  // шторы и так открываються .
        log("Room1_roll/up  - шторы и так открываються .  ");
        return; 				  //  ничего не делаем .
         }   

      if (dev[device_roll][rele_dn] ){  // шторы закрываються
		      	dev[device_roll][rele_dn]  =false;   //     останавливаем  закрытие штор    
      	
        		clearTimeout(timer_id);
        		timer2s_up = false;
        log("Room1_roll/up  - останавливаем  закрытие штор  ");
       	}   
       log("Room1_roll start up, timer= {},Room_roll/delay_Timer = {} , roll_condition= {}",(roll_condition* dev[_Room_delay]*10),dev[_Room_delay],roll_condition);
       dev[device_roll][rele_up] = true;  //
       timer_id=setTimeout(function () {
          roll_condition=0;
         dev[_Room_tag]=0;
		 dev[device_roll][rele_up]  = false;
	 	 },roll_condition*dev[_Room_delay]*10);
	}
   }   
  });

  defineRule({
    whenChanged: _Room_dn,
   then: function (newValue, devName, cellName) {
     if (newValue) {
        log("Room1_roll/dn start ");
       	dev["Room1_roll/dn"] = false;
         if (dev[device_input_button_dn] || dev[device_input_button_up] ){  // Если нажаты кнопки , ничего не делае. 
        log("Room1_roll/dn -нажата одна из кнопок ");
           return;
         }   
      if (dev[device_roll][rele_dn] ){  // шторы и так закрываються.
        log("Room1_roll/dn   шторы и так закрываються"); 
        return; 				  //  ничего не делаем .
         }   

      if (dev[device_roll][rele_up]){  // шторы открываються
		      	dev[device_roll][rele_up] = false;   //        
      			clearTimeout(timer_id);
      			timer2s_up = false;
          }   
     log("Room1_roll start up, timer= {},dev[Room1_roll/delay_Timer] = {} , roll_condition= {}",((100-roll_condition)* dev[_Room_delay]*10),dev[_Room_delay],roll_condition);
       dev[device_roll][rele_dn] = true;  //
      timer_id=setTimeout(function () {
		dev[device_roll][rele_dn] = false;
        roll_condition=100;
        dev[_Room_tag]=100;
	 	 },(100-roll_condition)*dev[_Room_delay]*10 );
	}
   }   
  });

///
  
defineRule("UP", {	
  	whenChanged:   device_input_button_up, 
    then: function (newValue, devName, cellName) {
    
      log("Room1_roll press up, timer= {},dev[Room1_roll/delay_Timer] = {} , roll_condition= {}",((100-roll_condition)* dev[_Room_delay]*10),dev[_Room_delay],roll_condition);
	
      }
    });
	
    	
defineRule("DN", {	

	whenChanged: device_input_button_dn,
    then: function (newValue, devName, cellName) {
    
	
  }
});
*/
/////