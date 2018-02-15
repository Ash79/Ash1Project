package com.ibm.util.api;

import com.ibm.util.model.Client;

import io.swagger.annotations.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import javax.validation.constraints.*;
@javax.annotation.Generated(value = "com.ibm.util.languages.SpringCodegen", date = "2017-01-25T13:29:39.620Z")

@Api(value = "Clients", description = "the Clients API")
public interface ClientsApi {
      @ApiOperation(value = "", notes = "Gets all clients from the system that the user has access to", response = Client.class, responseContainer = "List", tags={ "Client", })
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "client response", response = Client.class),
        @ApiResponse(code = 404, message = "client response", response = Client.class),
        @ApiResponse(code = 500, message = "client response", response = Client.class) })
    @RequestMapping(value = "/clients",
        produces = { "application/json" },
        method = RequestMethod.GET)
    ResponseEntity<List<Client>> getClient();
                    @ApiOperation(value = "", notes = "Puts all clients from the system that the user has access to", response = Client.class, responseContainer = "List", tags={ "Client", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "client response", response = Client.class),
      @ApiResponse(code = 404, message = "client response", response = Client.class),
      @ApiResponse(code = 500, message = "client response", response = Client.class) })
  @RequestMapping(value = "/clients",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.PUT)
  ResponseEntity<List<Client>> putClient(@ApiParam(value = ""  ) @RequestBody Client client);
            @ApiOperation(value = "", notes = "Posts all clients from the system that the user has access to", response = Client.class, responseContainer = "List", tags={ "Client", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "client response", response = Client.class),
      @ApiResponse(code = 404, message = "client response", response = Client.class),
      @ApiResponse(code = 500, message = "client response", response = Client.class) })
  @RequestMapping(value = "/clients",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.POST)
  ResponseEntity<List<Client>> postClient(@ApiParam(value = ""  ) @RequestBody Client client);
            @ApiOperation(value = "", notes = "Patchs all clients from the system that the user has access to", response = Client.class, responseContainer = "List", tags={ "Client", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "client response", response = Client.class),
      @ApiResponse(code = 404, message = "client response", response = Client.class),
      @ApiResponse(code = 500, message = "client response", response = Client.class) })
  @RequestMapping(value = "/clients",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.PATCH)
  ResponseEntity<List<Client>> patchClient();
          @ApiOperation(value = "", notes = "Deletes all clients from the system that the user has access to", response = Client.class, responseContainer = "List", tags={ "Client", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "client response", response = Client.class),
      @ApiResponse(code = 404, message = "client response", response = Client.class),
      @ApiResponse(code = 500, message = "client response", response = Client.class) })
  @RequestMapping(value = "/clients",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.DELETE)
  ResponseEntity<List<Client>> deleteClient(@ApiParam(value = ""  ) @RequestBody Client client);
          }
