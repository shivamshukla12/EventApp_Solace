/***
 * Implementation for CatalogService defined in ./cat-service.cds
 */
const cds = require("@sap/cds");
const { executeHttpRequest } = require("@sap-cloud-sdk/core");
"use strict";
const { PerformanceObserver, performance } = require("perf_hooks");
var util = require("util");
var hana = require("@sap/hana-client");

module.exports = function () {

  this.on("READ", "CreateMessage", async (req) => {
      const srv =await cds.connect.to("messaging");
      res = [];
      let { auditlogrecords } = srv.entities;
      try {
        //var queryPath = req.getUrlObject().path;
        result = await srv.transaction(req).send({
            query: req.query
        });

        result.forEach(element => {
          AuditLog = {};
          AuditLog.message_uuid = element.message_uuid;
          AuditLog.time = element.time;
          element.message = element.message.replace(/\\/g, "");
          AuditLog.message = element.message;
          res.push(AuditLog);
        });
       return res;
    }
    catch (error) {
        req.reject(400, error.message)
    }
  });
  this.on("READ", "Fedex", async (req) => {
    // const srv =await cds.connect.to("messaging");
    res = [];
    // let { auditlogrecords } = srv.entities;
    try {
      var connOptions = {
        serverNode:
          "e3a8e848-d48f-472d-91e9-555d630aff17.hana.trial-us10.hanacloud.ondemand.com:443",
        UID: "DBADMIN",
        PWD: "sparta@123A",
      };
      let sql = `SELECT * FROM FEDEX_SHIP;`;
      var connection = hana.createConnection();
      connection.connect(connOptions);
      var t0 = performance.now();
      var result = "";
      var result = connection.exec(sql);
     return result;
  }
  catch (error) {
      req.reject(400, error.message)
  }
});
};
