package com.ibm.util.api;

import com.ibm.util.model.Client;
import io.swagger.annotations.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@javax.annotation.Generated(value = "com.ibm.util.languages.SpringCodegen", date = "2017-01-25T13:29:39.620Z")

@Controller
public class ClientsApiController implements ClientsApi {
                  
        public ResponseEntity<List<Client>> getClient() {
    	List<Client> clientList = new ArrayList<Client>();
            	ObjectMapper mapper = new ObjectMapper();
      	try {
          InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Client.json");
          clientList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Client.class));
      		//ClientList = mapper.readValue(new File("/Users/rajeshlagisetty/Desktop/Cedrus/training/generators/01252017/sampleData/Client.json"), TypeFactory.defaultInstance().constructCollectionType(List.class, Client.class));
  		} catch (JsonParseException e) {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		} catch (JsonMappingException e) {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		} catch (IOException e) {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		}
              // do some magic!
        return new ResponseEntity<List<Client>>(clientList, HttpStatus.OK);
    }
                          public ResponseEntity<List<Client>> putClient(@ApiParam(value = ""  ) @RequestBody Client Client) {
        // do some magic!
        return new ResponseEntity<List<Client>>(HttpStatus.OK);
    }
    
                      public ResponseEntity<List<Client>> postClient(@ApiParam(value = ""  ) @RequestBody Client Client) {
        // do some magic!
        return new ResponseEntity<List<Client>>(HttpStatus.OK);
    }
        
                  public ResponseEntity<List<Client>> patchClient() {
        // do some magic!
        return new ResponseEntity<List<Client>>(HttpStatus.OK);
    }
            
              public ResponseEntity<List<Client>> deleteClient(@ApiParam(value = ""  ) @RequestBody Client Client) {
        // do some magic!
        return new ResponseEntity<List<Client>>(HttpStatus.OK);
    }
                
        

}
