////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////
/////
/////    Основной скрип .
/////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    var device_1="wb-mr6c_233"         // A2  Модуль реле  
    var device_2="wb-mr6c_31"       // A3  "Модуль реле "
    var device_4="wb-mr6cu_145"      // A8  "Модуль реле 
    var device_3="wb-mr6c_15"      // 
   
    var DD_input_Holl="wb-gpio/EXT2_IN1";   // Датчик движения в коридоре 
    var DD_input_CLoset="wb-gpio/EXT2_IN3";   // Датчик движения в Ванной
    var DD_input_CLoset2="wb-gpio/EXT2_IN2";   // Датчик движения в туалете
	var button_AllOut_holl="wb-gpio/EXT1_IN14"   //  Кнопка , я ушёл   Не используеться 
	var button_Light_Off="wb-gpio/EXT1_IN13"    //  Выключить весь свет .   Не используеться 

	

// Не трогать   vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv




// Не трогать  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Input 

var button_Entity1=device_1+"/Input 1"
var button_Entity2=device_1+"/Input 2"
var button_Entity3=device_1+"/Input 3"
var button_Entity4=device_1+"/Input 4"
var button_Entity5=device_1+"/Input 5"
var button_Entity6=device_1+"/Input 6"

var button_Entity7=device_2+"/Input 1"
var button_Entity8=device_2+"/Input 2"
var button_Entity9=device_2+"/Input 3"
var button_Entity10=device_2+"/Input 4" // Бра . Мастер
var button_Entity11=device_2+"/Input 5"  //Коридор 
var button_Entity12=device_2+"/Input 6"   //Ванная свет

var button_Entity13=device_3+"/Input 1"
var button_Entity14=device_3+"/Input 2"   // Спальня
var button_Entity15=device_3+"/Input 3"   //Гардероб
var button_Entity16=device_3+"/Input 4"  //  гостинная 
var button_Entity17=device_3+"/Input 5"  //кухня 
var button_Entity18=device_3+"/Input 6"



var _rele_Entity1=device_1+"/K1";       // Кухня Лстра 
var _rele_Entity2=device_1+"/K2";       // Гардероб Свет
var _rele_Entity3=device_1+"/K3";      // 
var _rele_Entity4=device_1+"/K4";      // Холл точки
var _rele_Entity5=device_1+"/K5";      // Гардероб Подсветка
var _rele_Entity6=device_1+"/K6";    // Бра

var _rele_Entity7=device_2+"/K1";   // sleeping Люстра 
var _rele_Entity8=device_2+"/K2";    // sleeping bra
var _rele_Entity9=device_2+"/K3";     // Холл 
var _rele_Entity10=device_2+"/K4";    // Вентилятор
var _rele_Entity11=device_2+"/K5";    // Прихожая 
var _rele_Entity12=device_2+"/K6";

var _rele_Entity13=device_3+"/K1";
var _rele_Entity14=device_3+"/K2"; //спальня
var _rele_Entity15=device_3+"/K3"; //гардероб
var _rele_Entity16=device_3+"/K4";   //  кухня
var _rele_Entity17=device_3+"/K5";   // гостинная 
var _rele_Entity18=device_3+"/K6";

var _rele_Entity13=device_4+"/K1"; // точка Гостинная 
var _rele_Entity14=device_4+"/K2"; // точка кухня 
var _rele_Entity15=device_4+"/K3"; // Гостинная Люстра 



var b1_flag_long= null
var b1_short_interval=null
var b1_long_interval=null


var b2_flag_long= null
var b2_short_interval=null
var b2_long_interval=null


var b3_flag_long= null
var b3_short_interval=null
var b3_long_interval=null

var b4_flag_long= null
var b4_short_interval=null
var b4_long_interval=null


var b5_flag_long= null
var b5_short_interval=null
var b5_long_interval=null


var b6_flag_long= null
var b6_short_interval=null
var b6_long_interval=null

var b7_flag_long= null
var b7_short_interval=null
var b7_long_interval=null


var b8_flag_long= null
var b8_short_interval=null
var b8_long_interval=null


var b9_flag_long= null
var b9_short_interval=null
var b9_long_interval=null

var b2_flag_long= null
var b2_short_interval=null
var b2_long_interval=null


var b2_flag_long= null
var b2_short_interval=null
var b2_long_interval=null


var b11_flag_long= null
var b11_short_interval=null
var b11_long_interval=null

var b14_flag_long= null
var b14_short_interval=null
var b14_long_interval=null


var b15_flag_long= null
var b15_short_interval=null
var b15_long_interval=null


var b10_flag_long= null
var b10_short_interval=null
var b10_long_interval=null

var b12_flag_long= null
var b12_short_interval=null
var b12_long_interval=null


var b16_flag_long= null
var b16_short_interval=null
var b16_long_interval=null


var b17_flag_long= null
var b17_short_interval=null
var b17_long_interval=null

// //////////////////////////////////////////////////////////////////////////////////////

                                 //  Спальня 
defineRule({
    whenChanged: button_Entity14,
    then: function (newValue, devName, cellName) {
      
      
      if (newValue){
            // Нажато 
                     b14_long_interval=setTimeout(function () { 
                if  (dev[button_Entity14]) {
                    b14_flag_long=1;
                    clearTimeout(b14_long_interval);
                     dev[_rele_Entity1] =false;
                    dev[_rele_Entity2] =false;
                    dev[_rele_Entity3] =false;
                    dev[_rele_Entity4] =false;
                    dev[_rele_Entity5] =false;
                    dev[_rele_Entity6] =false;
                    dev[_rele_Entity7] =false;
                    dev[_rele_Entity8]=false;
                    dev[_rele_Entity9] =false;
                    dev[_rele_Entity10] =false;
                    dev[_rele_Entity11] =false;
                    dev[_rele_Entity12] =false;
                    dev[_rele_Entity13] =false;
                    dev[_rele_Entity14] =false;
                    dev[_rele_Entity15] =false;
                    dev[_rele_Entity16] =false;
                    dev[_rele_Entity17] =false;
                    dev[_rele_Entity18] =false;
                    dev[_rele_Entity12] =false;
              log("LONG PRESS ");
                }
            }, 1200);
        }   
        else{  
            // Отпущенно 
          log ("__________Отпущенно----------");
                if (b14_flag_long){
                  b14_flag_long=null;
                return;
            }
           log ("NOT b_short_interval = {}",b14_short_interval);
            clearTimeout(b14_long_interval); // остановили таймер Long
           log ("bЧ_short_interval = {}",b14_short_interval);
           
          if (b14_short_interval) {
           log ("NOT");
                clearTimeout(b14_short_interval);
                b14_short_interval=null;
                dev[_rele_Entity8] = !dev[_rele_Entity8] ;
                  log ("DUBL");
                return;
            }
            
            b14_short_interval=setTimeout(function () { 
                dev[_rele_Entity7] = !dev[_rele_Entity7] ;        
                clearTimeout(b14_short_interval);
                b14_short_interval=null
                  log ("Singl");
              }, 850);
          log ("bХ_short_interval = {}",b14_short_interval);
        }
    }
});


  
// //////////////////////////////////////////////////////////////////////////////////////

                                 //  Кнопка 
defineRule({
    whenChanged: button_Entity15,
    then: function (newValue, devName, cellName) {
      
      
      if (newValue){
            // Нажато 
                     b15_long_interval=setTimeout(function () { 
                if  (dev[button_Entity15]) {
                    b15_flag_long=1;
                    clearTimeout(b15_long_interval);
                    dev[_rele_Entity2] =false;
                    dev[_rele_Entity5] =false;
              log("LONG PRESS ");
                }
            }, 1200);
        }   
        else{  
            // Отпущенно 
          log ("__________Отпущенно----------");
                if (b15_flag_long){
                  b15_flag_long=null;
                return;
            }
           log ("NOT b_short_interval = {}",b15_short_interval);
            clearTimeout(b15_long_interval); // остановили таймер Long
           log ("bЧ_short_interval = {}",b15_short_interval);
           
          if (b15_short_interval) {
           log ("NOT");
                clearTimeout(b15_short_interval);
                b15_short_interval=null;
                dev[_rele_Entity5] = !dev[_rele_Entity5] ;
                  log ("DUBL");
                return;
            }
            
            b15_short_interval=setTimeout(function () { 
                dev[_rele_Entity2] = !dev[_rele_Entity2] ;        
                clearTimeout(b15_short_interval);
                b15_short_interval=null
                  log ("Singl");
              }, 850);
          log ("bХ_short_interval = {}",b15_short_interval);
        }
    }
});

//////
// //////////////////////////////////////////////////////////////////////////////////////

                                 //  Кнопка 
defineRule({
    whenChanged: button_Entity16,
    then: function (newValue, devName, cellName) {
      
      
      if (newValue){
            // Нажато 
                     b16_long_interval=setTimeout(function () { 
                if  (dev[button_Entity16]) {
                    b16_flag_long=1;
                    clearTimeout(b16_long_interval);
                    dev[_rele_Entity13] =false;
                    dev[_rele_Entity15] =false;
              log("LONG PRESS ");
                }
            }, 1200);
        }   
        else{  
            // Отпущенно 
          log ("__________Отпущенно----------");
                if (b16_flag_long){
                  b16_flag_long=null;
                return;
            }
           log ("NOT bЧ_short_interval = {}",b16_short_interval);
            clearTimeout(b16_long_interval); // остановили таймер Long
         
           
          if (b16_short_interval) {
           log ("NOT");
                clearTimeout(b16_short_interval);
                b16_short_interval=null;
                dev[_rele_Entity13] = !dev[_rele_Entity13] ;
                  log ("DUBL");
                return;
            }
            
            b16_short_interval=setTimeout(function () { 
                dev[_rele_Entity15] = !dev[_rele_Entity15] ;        
                clearTimeout(b16_short_interval);
                b16_short_interval=null
                  log ("Singl");
              }, 850);
          log ("b16_short_interval = {}",b16_short_interval);
        }
    }
});

// //////////////////////////////////////////////////////////////////////////////////////

                                 //  Кнопка 
defineRule({
    whenChanged: button_Entity17,
    then: function (newValue, devName, cellName) {
      
      
      if (newValue){
            // Нажато 
                     b17_long_interval=setTimeout(function () { 
                if  (dev[button_Entity17]) {
                    b17_flag_long=1;
                    clearTimeout(b17_long_interval);
                    dev[_rele_Entity14] =false;
                    dev[_rele_Entity1] =false;
              log("LONG PRESS ");
                }
            }, 1200);
        }   
        else{  
            // Отпущенно 
          log ("__________Отпущенно----------");
                if (b17_flag_long){
                  b17_flag_long=null;
                return;
            }
           log ("NOT b_short_interval = {}",b17_short_interval);
            clearTimeout(b17_long_interval); // остановили таймер Long
           log ("bЧ_short_interval = {}",b17_short_interval);
           
          if (b17_short_interval) {
           log ("NOT");
                clearTimeout(b17_short_interval);
                b17_short_interval=null;
                dev[_rele_Entity14] = !dev[_rele_Entity14] ;
                  log ("DUBL");
                return;
            }
            
            b17_short_interval=setTimeout(function () { 
                dev[_rele_Entity1] = !dev[_rele_Entity1] ;        
                clearTimeout(b17_short_interval);
                b17_short_interval=null
                  log ("Singl");
              }, 850);
          log ("bХ_short_interval = {}",b17_short_interval);
        }
    }
});

//////

                                 //  Кнопка 
defineRule({
    whenChanged: button_Entity12,
    then: function (newValue, devName, cellName) {
      
      
      if (newValue){
            // Нажато 
                     b12_long_interval=setTimeout(function () { 
                if  (dev[button_Entity12]) {
                    b12_flag_long=1;
                    clearTimeout(b12_long_interval);
                    dev[_rele_Entity12] =false;
                    dev[_rele_Entity11] =false;
              log("LONG PRESS ");
                }
            }, 1200);
        }   
        else{  
            // Отпущенно 
          log ("__________Отпущенно----------");
                if (b12_flag_long){
                  b12_flag_long=null;
                return;
            }
           log ("NOT b_short_interval = {}",b12_short_interval);
            clearTimeout(b12_long_interval); // остановили таймер Long
           
          if (b12_short_interval) {
           log ("NOT");
                clearTimeout(b12_short_interval);
                b12_short_interval=null;
                dev[_rele_Entity12] = !dev[_rele_Entity12] ;
                  log ("DUBL");
                return;
            }
            
            b12_short_interval=setTimeout(function () { 
                dev[_rele_Entity11] = !dev[_rele_Entity11] ;        
                clearTimeout(b12_short_interval);
                b12_short_interval=null
                  log ("Singl");
              }, 850);
          log ("bХ_short_interval = {}",b12_short_interval);
        }
    }
});
//////

                                 //  Кнопка  Коридор
defineRule({
    whenChanged: button_Entity11,
    then: function (newValue, devName, cellName) {
      
      
      if (newValue){
            // Нажато 
                     b11_long_interval=setTimeout(function () { 
                if  (dev[button_Entity11]) {
                    b11_flag_long=1;
                    clearTimeout(b11_long_interval);
                    dev[_rele_Entity4] =false;
                    dev[_rele_Entity11] =false;
              log("LONG PRESS ");
                }
            }, 1200);
        }   
        else{  
            // Отпущенно 
          log ("__________Отпущенно----------");
                if (b11_flag_long){
                  b11_flag_long=null;
                return;
            }
           log ("NOT b_short_interval = {}",b11_short_interval);
            clearTimeout(b11_long_interval); // остановили таймер Long
           
          if (b11_short_interval) {
           log ("NOT");
                clearTimeout(b11_short_interval);
                b11_short_interval=null;
                dev[_rele_Entity4] = !dev[_rele_Entity4] ;
                  log ("DUBL");
                return;
            }
            
            b11_short_interval=setTimeout(function () { 
                dev[_rele_Entity9] = !dev[_rele_Entity9] ;        
                clearTimeout(b11_short_interval);
                b11_short_interval=null
                  log ("Singl");
              }, 850);
          log ("bХ_short_interval = {}",b11_short_interval);
        }
    }
});

                                 //  Кнопка 
defineRule({
    whenChanged: button_Entity10,
    then: function (newValue, devName, cellName) {
      
      
      if (newValue){
            // Нажато 
                     b10_long_interval=setTimeout(function () { 
                if  (dev[button_Entity10]) {
                    b10_flag_long=1;
                    clearTimeout(b10_long_interval);
                    dev[_rele_Entity1] =false;
                    dev[_rele_Entity2] =false;
                    dev[_rele_Entity3] =false;
                    dev[_rele_Entity4] =false;
                    dev[_rele_Entity5] =false;
                    dev[_rele_Entity6] =false;
                    dev[_rele_Entity7] =false;
                    dev[_rele_Entity8]=false;
                    dev[_rele_Entity9] =false;
                    dev[_rele_Entity10] =false;
                    dev[_rele_Entity11] =false;
                    dev[_rele_Entity12] =false;
                    dev[_rele_Entity13] =false;
                    dev[_rele_Entity14] =false;
                    dev[_rele_Entity15] =false;
                    dev[_rele_Entity16] =false;
                    dev[_rele_Entity17] =false;
                    dev[_rele_Entity18] =false;
                    dev[_rele_Entity12] =false;
    
                  dev[_rele_Entity6] =false;
              log("LONG PRESS ");
                }
            }, 1000);
        }   
        else{  
            // Отпущенно 
          log ("__________Отпущенно----------");
                if (b10_flag_long){
                  b10_flag_long=null;
                return;
            }
           log ("NOT b_short_interval = {}",b10_short_interval);
            clearTimeout(b10_long_interval); // остановили таймер Long
           
          if (b10_short_interval) {
           log ("NOT");
                clearTimeout(b10_short_interval);
                b10_short_interval=null;
                dev[_rele_EntityX] = !dev[_rele_EntityX] ;
                  log ("DUBL");
                return;
            }
            
            b10_short_interval=setTimeout(function () { 
                dev[_rele_Entity6] = !dev[_rele_Entity6] ;        
                clearTimeout(b10_short_interval);
                b10_short_interval=null
                  log ("Singl");
              }, 850);
          log ("bХ_short_interval = {}",b10_short_interval);
        }
    }
});
//////////////////


defineRule({  //   Сценарий "Я пришёл"
   whenChanged:  [DD_input_Holl,"ALL_OUT/switch"], // 
  then: function (newValue, devName, cellName) {
      log("Log1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue); 

      if ((cellName) == "EXT2_IN1" )   {
        log("Log2 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue); 
          if ((newValue) && dev["ALL_OUT/switch" ]  ) {
      
            log("Log1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue); 
            dev["ALL_OUT/switch"] = false;   // Отключаем сценарний я ушёл
            dev[_rele_Entity11]= true;   //ХОЛЛ
            dev[_rele_Entity9]= true;   //ХОЛЛ

            
          }
      }
    }
});


/*

  defineRule({  //   Ванная  
  whenChanged: [DD_input_CLoset], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
    
    if  ( newValue )  {
    log("Log1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);
      dev[_rele_Br_Lite]= true; 
      dev["All_Lite_Off/switch"] = true;
      }
   }
});

defineRule({  //  WC 
  whenChanged: [DD_input_CLoset2], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
    
    if  ( newValue )  {
    log("Log1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);
      dev[_rele_WC_Lite]= true; 
      dev["All_Lite_Off/switch"] = true;
      }
   }
});


*/

/////// Выключить весь свет 

defineVirtualDevice("All_Lite_Off", {
  title: "Отключить весь свет",	
  cells: {
    switch: {
          type: "switch",
			value: false
    	},
  }
});


  defineRule({  //     Отключение всего света 
  whenChanged: [button_Light_Off,"All_Lite_Off/switch"], 
  then: function (newValue, devName, cellName) {

        if  (!newValue )  {
       
          dev[_rele_Entity1]=false;
          dev[_rele_Entity2]=false;
          dev[_rele_Entity3]=false;
          dev[_rele_Entity4]=false;
          dev[_rele_Entity5]=false;
          dev[_rele_Entity6]=false;
          dev[_rele_Entity7]=false;
          dev[_rele_Entity8]=false;
          dev[_rele_Entity9]=false;
          dev[_rele_Entity10]=false;
          dev[_rele_Entity11]=false;
          dev[_rele_Entity12]=false;
          dev[_rele_Entity13]=false;
          dev[_rele_Entity14]=false;
          dev[_rele_Entity15]=false;
          dev[_rele_Entity16]=false;
          dev[_rele_Entity17]=false;
          dev[_rele_Entity18]=false;
          dev[_rele_Entity19]=false;
          dev[_rele_Entity20]=false;
          dev[_rele_Entity21]=false;
          dev[_rele_Entity22]=false;
          dev[_rele_Entity23]=false;
          dev[_rele_Entity24]=false;
          dev[_rele_Entity25]=false;
          dev[_rele_Entity26]=false;
          dev[_rele_Entity27]=false;
          dev[_Dim_Entity1]=false;
          dev[_Dim_Entity2]=false;
          dev[_Dim_Entity3]=false;
        }
   
     }
});


defineVirtualDevice("ALL_OUT",  {
 
  title: "Сценарий всё ушли",
 	cells: {
      switch:  {
        title: "Сценарий всё ушли",
        type : "switch",
          value : true,
        },
       
      } //cells 
});    //      ALL_OUT



defineRule({  //     Включение сценария все ушли .
  whenChanged: [button_AllOut_holl,"ALL_OUT/switch"], 
  then: function (newValue, devName, cellName) {
  log("Log ALL_OUT - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue); 

        if  ( newValue )  {
      dev["ALL_OUT/switch"] = true;    // включаем сценарий я ушёл
      dev["All_Lite_Off/switch"] = false;


          dev[_rele_Entity1]=false;
          dev[_rele_Entity2]=false;
          dev[_rele_Entity3]=false;
          dev[_rele_Entity4]=false;
          dev[_rele_Entity5]=false;
          dev[_rele_Entity6]=false;
          dev[_rele_Entity7]=false;
          dev[_rele_Entity8]=false;
          dev[_rele_Entity9]=false;
          dev[_rele_Entity10]=false;
          dev[_rele_Entity11]=false;
          dev[_rele_Entity12]=false;
          dev[_rele_Entity13]=false;
          dev[_rele_Entity14]=false;
          dev[_rele_Entity15]=false;
          dev[_rele_Entity16]=false;
          dev[_rele_Entity17]=false;
          dev[_rele_Entity18]=false;
          dev[_rele_Entity19]=false;
          dev[_rele_Entity20]=false;
          dev[_rele_Entity21]=false;
          dev[_rele_Entity22]=false;
          dev[_rele_Entity23]=false;
          dev[_rele_Entity24]=false;
          dev[_rele_Entity25]=false;
          dev[_rele_Entity26]=false;
          dev[_rele_Entity27]=false;
          
        } 
     }
});


/*
// //////////////////////////////////////////////////////////////////////////////////////

                                 //  Кнопка 
defineRule({
    whenChanged: button_Entity8,
    then: function (newValue, devName, cellName) {
      
      
      if (newValue){
            // Нажато 
                     b8_long_interval=setTimeout(function () { 
                if  (dev[button_Entity8]) {
                    flag_long_Entity8=1;
                    clearTimeout(b8_long_interval);
                    dev[_rele_EntityX] =false;
                    dev[_rele_EntityY] =false;
              log("LONG PRESS ");
                }
            }, 1100);
        }   
        else{  
            // Отпущенно 
          log ("_____________________UP---------------------------------------");
                if (flag_long_Entity8){
                  flag_long_Entity8=null;
                return;
            }
            clearTimeout(b8_long_interval); // остановили таймер Long
            if (b8_short_interval){
                clearTimeout(b8_short_interval);
                b8_short_interval=null;
                dev[_rele_EntityX] = !dev[_rele_EntityX] ;
                return;
            }
            
            b8_short_interval=setTimeout(function () { 
                dev[_rele_EntityY] = !dev[_rele_EntityY] ;        
                clearTimeout(b8_short_interval);
                b8_short_interval=null;
              }, 550);
        }
    }
});

*/
