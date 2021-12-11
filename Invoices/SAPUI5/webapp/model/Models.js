// Este fragmento de fichero antes estaba directamente en el controller, pero lo modularizamos porque 
// tendremos mas modelos y desde el controller solo llamaremos a este fichero y seleccionamos una clave 
// del objeto que contiene un modelo, es mas practico
// @ts-nocheck 
sap.ui.define([ 
    "sap/ui/model/json/JSONModel"
],
// Nos ayuda a obtener los recursos de los modulos
    /**
     *  
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel  
     */
    function ( JSONModel ) {
        "use strict"  //Con este metodo de js nos permitira ver los posibles fallos que tengamos al momento de programar y ser visualizados en la ventana de problems
        
        // A diferencia del controler retornamos un objeto, porque podemos devolver varios objetos si queremos
        return  {
            createRecipient: function () {
                // Creamos un objeto para instanciarlo en nuestro modulo 
                var oData = {
                    recipient :{
                        name: "World"
                    }
                };

                // Lo instanciamos en el JSONModel   
                return new JSONModel(oData);  
            }
        };
    });

     