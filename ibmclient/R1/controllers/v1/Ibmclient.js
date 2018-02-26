'use strict';
var url = require('url');
var Ibmclient = require('./IbmclientService');

module.exports.getIbmclient = function getIbmclient (req, res, next) {
    Ibmclient.getIbmclient (req.swagger.params, res, next);
};

module.exports.putIbmclient = function putIbmclient (req, res, next) {
    Ibmclient.putIbmclient (req.swagger.params, res, next);
};

module.exports.postIbmclient = function postIbmclient (req, res, next) {
    Ibmclient.postIbmclient (req.swagger.params, res, next);
};

module.exports.patchIbmclient = function patchIbmclient (req, res, next) {
    Ibmclient.patchIbmclient (req.swagger.params, res, next);
};

module.exports.deleteIbmclient = function deleteIbmclient (req, res, next) {
    Ibmclient.deleteIbmclient (req.swagger.params, res, next);
};

