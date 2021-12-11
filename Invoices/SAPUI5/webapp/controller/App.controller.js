// @ts-nocheck

// @ts-ignore
sap.ui.define([
    // Esta parte del define se llama module, el module que utilizamos es el Controller
    "sap/ui/core/mvc/Controller",
    // Usamos la libreria sap.m para obtener el modulo MessageToast
    "sap/m/MessageToast",
    "logaligroup/SAPUI5/model/Models",
    // Este modulo en particular es para el i18n 
    "sap/ui/model/resource/ResourceModel"
],
// Nos ayuda a obtener los recursos de los modulos
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast  
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel  
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";  //Con este metodo de js nos permitira ver los posibles fallos que tengamos al momento de programar y ser visualizados en la ventana de problems
        
        // Con el extends instanciamos el controller App.controller.js con todos sus componente, funciones etc( en este caso solo tenemos una funcion)
        return Controller.extend("logaligroup.SAPUI5.controller.App",{
            // Lo que hacemos en onInit es instanciar un modelo, el profe explica  pasos como crear un objeto anidado  
            // para luego usarlo despues, y luego una variable donde sera instancia el modulo del modelo 
            onInit: function () {
                //  EL MODELO AHORA SE INSTANCIA EN EL COMPONENT, YA NO DESDE AQUI
            },
            //onShowHello es una funcion de este controlador de la vista que llama al controlador. 
            onShowHello: function () {
                // LO QUE HAREMOS ES MOSTRAR EN EL TOAST LO SIGUIENTE: EL TEXTO QUE LLEVA UNA PROPIEDAD DEL I18N 
                // MAS LO QUE ESCRIBAMOS EN EL INPUT. 
                // PARA OBTENER LOS DATOS DE ESOS MODELOS SOLO DEBEMOS OBTENER LA INSTANCIA DE LA VISTA Y DE AHI 
                // EXTRAER LOS DATOS

                // READ TEXT FROM I18N MODEL 
                // una vez obtenido la instancia de la vista, obtenemos la instancia del modelo y luego ejecutamos
                // getResourceBundle que nos dara acceso a las propiedades del fichero i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                // READ PROPERTY FROM DATA MODEL 
                // .getModel().getProperty pordemos obtener una determina propiedad
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                // Obtenemos el mensaje y concatenamos los dos
                // con el oBundle.getText solo mencionamos el nombre de la clave para obtener sus valores
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });

     