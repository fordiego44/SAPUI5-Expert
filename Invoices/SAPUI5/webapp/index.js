// El index.js lo llama el index.html
// @ts-nocheck

// @ts-ignore
sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    /**
     * 
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer 
     */
    function (ComponentContainer) {
        // "use strict"  //Con este metodo de js nos permitira ver los posibles fallos que tengamos al momento de programar y ser visualizados en la ventana de problems
        // A traves del componente de container instanciamos el component.js, y este contiene la vista y los modelos i18n y el local
        new ComponentContainer({
            name:"logaligroup.SAPUI5",
            settings:{
                id:"SAPUI5"
            },
            async:true
        }).placeAt("content");
    }); 

     