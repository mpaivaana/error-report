<div>
<div className="espaco-1">
  </div> 

#### Description of HTTP Status Codes (2xx, 3xx, 4xx, and 5xx)

****
   <div>  
          <div className="left">
           <b>200(OK)</b>   
          </div>
              </div>
                                     
<br/>
Request was successful.

****

   <div>  
          <div className="left">
           <b>301(Moved Permanently)</b>   
          </div>
              </div>
                                    
<br/>
Permanent redirection from one page to another address.<br/><br/>
You should update to the correct URL for receiving the notification token.<br/><br/>
The URL adjustment can be done on your server side or by sending <code>PUT</code> requests to the appropriate route.

****

   <div>  
          <div className="left">
           <b>302(Found)</b>   
          </div>
              </div>
  </div>                                      
<br/>
Temporary redirection from one page to another address.<br/><br/>
You should update to the correct URL for receiving the notification token.<br/><br/>
The URL adjustment can be done on your server side or by sending <code>PUT</code> requests to the appropriate route.

****

   <div>  
          <div className="left">
           <b>400(Bad Request)</b>   
          </div>
              </div>
  </div>                                      
<br/>
A required parameter was not sent or was sent incorrectly. Check the "request history" to interpret the API returns and correct the syntax and/or parameters of the request you are sending to the Efí API.

****

   <div>  
          <div className="left">
           <b>401(Not Found)</b>   
          </div>
              </div>
  </div>                                      
<br/>
The requested resource was not found. That is, the 401 response occurs when the requested resource (URL/document/file) to a destination server does not exist or cannot be found.<br/><br/>
Ensure your URL is correct for receiving the notification token. <br/><br/>
The URL adjustment can be done on your server side or by sending <code>PUT</code> requests to the appropriate route.

****

   <div>  
          <div className="left">
           <b>404(Not Found)</b>   
          </div>
              </div>
  </div>                                      
<br/>
The requested resource was not found. That is, the 404 response occurs when the requested resource (URL/document/file) to a destination server does not exist or cannot be found.<br/><br/>
Ensure your URL is correct for receiving the notification token. <br/><br/>
The URL adjustment can be done on your server side or by sending <code>PUT</code> requests to the appropriate route.

****

   <div>  
          <div className="left">
           <b>500(Internal Server Error)</b>   
          </div>
              </div>
  </div>                                      
<br/>
Internal server error. The server encountered an unexpected condition that prevented it from fulfilling the request. This usually indicates a web server error. A common cause is an error in the <code>.htaccess</code> file. To investigate, read your server's error log.<br/><br/>
It's worth noting that this type of error is not accessible by PHP, so you will not be able to read the log details by enabling PHP error display.<br/><br/>
However, not always the error is from the webserver, as it is possible to configure the environment so that errors from PHP or another module, for example, are handled by the webserver with status 500.

</div>
 

