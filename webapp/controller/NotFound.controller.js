sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.training.exc.controller.NotFound", {
            
            onNavToOverview: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("overview", {}, true);
              }

        });
    });