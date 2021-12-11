// @ts-nocheck
// ESTE ARCHIVO NOS PERMITIRA MANEJAR COMPONENTES, CENTRALIZAR LOGICAS COMO LA INSTANCIA DE MODELOS PARA USARLOS EN DIFERENTES VISTA 
// A DIFERENCIA DEL CONTROLADOR QUE TENIA ESTA LOGICA, HABRIA QUE REPLICARLO VARIAS VECES, LO QUE NO ES CONVENIENTE
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    // Este modulo en particular es para el i18n 
    "sap/ui/model/resource/ResourceModel"
], 
/**
 * @param {typeof sap.ui.core.UIComponent} UIComponent
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel  
 */

function ( UIComponent, Models, ResourceModel ) {
    // Dentro de la funcion(el de arriba) devolvemos la instancia de nuestro componente
    // Accedemos al componente estandar y atraves de la opcion extends pasamos la ruta de este fichero
    return UIComponent.extend( "logaligroup.SAPUI5.Component", {
        
        // LA CONFIGURACION DEL ROOTVIEW SE HACE EN EL METADA, ESTO REEMPLAZARA LA FORMA EN COMO CARGAMOS EL APP.VIEW
            // ANTERIORMENTE LO HACIAMOS A TRAVES DEL INDEX.JS
            // POR EL MOMENTO SOLO USAMOS UNA PROPIEDAD LLAMADA ROOTVIEW, INGRESAMOS LA RUTA DE ESA VISTA, EL TIPO DE ARCHIVO, CON CARGA ASINCRONA  Y LA ID SERA APP 
        metadata: {
            // Esto indica que la configuracion estara en el archivo manifest.json (rootView y demas)
            manifest:"json"
            // "rootView": {
            //         "viewName":"logaligroup.SAPUI5.view.App",
            //         "type":"XML",
            //         "async": true,
            //         "id":"app"
            // }
        },
        
        //  Encapsulamos todo lo que necesitamos en la funcion init, FUNCION QUE SE LLAMA CUANDO INSTANCIAMOS EL 
        // MODULO O COMPONENTE DE LA APLICACION
        init: function () { 
            // call the init  function of the parent
            // DECLARAMOS EL UIComponent, ACCEDEMOS A LA PROPIEDAD prototype, CONTINUAMOS CON init LA FUNCION Y 
            // CON APLY LE PASAMOS LOS PARAMTROS QUE NECESITA ESTA FUNCION
            // apply NECESITA LA INSTANCIA DEL COMPONENTE DONDE ESTAMOS TRABAJANDO, Y UN PARAMETRO QUE ES UNA VARIABLE LOCAL   
            UIComponent.prototype.init.apply( this, arguments ); 

            // DESPUES DE REALIZAR ESTA LLAMADA( LLAMADA AL INIT PADRE  ) MOVEREMOS LA LOGICA A UN UNICO PUNTO CENTRAL 
            // DE LA APLICACION PARA QUE ESTE DISPONIBLE EN TODO LOS DEMAS SITIOS, COMO LAS VISTAS 
            // (Es la logica escrita en los controladores de instanciar los modelos)
             // SET DATA MODEL ON THE VIEW
            this.setModel(Models.createRecipient()); //getView() no requiere de esto porque no instancia de una vista
             // ----------------------------
            // LOCALIZAMOS LA CARPETA I18N CON ESTE MODULO PARA 
            // SET I18N MODEL ON THE VIEW
            var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n"});
            //  A DIFERENCIA DEL OTRO MODELO ESTE NECESITA DE UN ALIAS, PORQUE SOLO UN MODELO PUEDE 
            // IR SIN ALIAS, LOS DEMAS ESTAN OBLIGADOS
            this.setModel( i18nModel, "i18n");

        }
    });
})