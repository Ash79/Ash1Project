'use strict';

const request = require('request');
const config = require('../../configuration/config');

const MOCK_SERVER_PORT = config.MOCK_SERVER_PORT;
const BASE_PATH = `http://localhost:${MOCK_SERVER_PORT}`+'/api/Customers/v1';

                        
module.exports.getCustomer = function getCustomer(callback) {
  request({
    url: BASE_PATH,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
module.exports.getCustomerById = function getCustomerById(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
                  
                                  module.exports.putCustomer = function putCustomer(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
      
                            module.exports.postCustomer = function postCustomer(body, callback) {
  request({
    url: BASE_PATH,
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 

            
                module.exports.patchCustomer = function patchCustomer(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PATCH",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                        
          module.exports.deleteCustomer = function deleteCustomer(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                              
      
  
