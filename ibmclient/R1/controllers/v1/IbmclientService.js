'use strict';
  var IbmclientFD = require('../../sampleData/v1/Ibmclient.json');
  var IbmclientData = IbmclientFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getIbmclient = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(IbmclientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, IbmclientData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putIbmclient = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(IbmclientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(IbmclientData[Object.keys(IbmclientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postIbmclient = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(IbmclientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(IbmclientData[Object.keys(IbmclientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchIbmclient = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(IbmclientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(IbmclientData[Object.keys(IbmclientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteIbmclient = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(IbmclientData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(IbmclientData[Object.keys(IbmclientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


