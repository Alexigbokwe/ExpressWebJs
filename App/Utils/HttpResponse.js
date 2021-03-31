const fs = require("fs");
class HttpResponse {
    static OK(res, payload) {
      return res.status(200).json({ payload: payload });
    }

    static DOWNLOAD(res, fileLink,shouldDeletefile = false) {
      if(shouldDeletefile){
        return res.download(fileLink,()=>{
          fs.unlinkSync(fileLink);
        });
      }else{
        return res.download(fileLink);
      }
    }
  
    static CREATED(res) {
      return res.status(201).json({ payload: "" });
    }
  
    static BAD_REQUEST(res, payload) {
      return res.status(400).json({ payload: payload });
    }
  
    static UNAUTHORIZED(res, error) {
      return res.status(401).json({ payload: error });
    }

    static PAYMENT_REQUIRED(res, error) {
      return res.status(402).json({ payload: error });
    }
  
    static FORBIDDEN(res, payload = null) {
      let msg =
        payload !== null
          ? payload
          : "You are not allowed to access this resource";
      return res.status(403).json({ payload: msg });
    }
  
    static NOTFOUND(res, payload = null) {
      let msg = payload !== null ? payload : "No Record Found";
      return res.status(404).json({ payload: msg });
    }

    static METHOD_NOT_ALLOWED(res, error) {
      return res.status(405).json({ payload: error });
    }

    static NOTACCEPTED(res, error) {
      return res.status(406).json({ payload: error });
    }

    static PROXY_AUTHENTICATION_REQUIRED(res, error) {
      return res.status(407).json({ payload: error });
    }

    static REQUEST_TIMEOUT(res, error) {
      return res.status(408).json({ payload: error });
    }

    static CONFLICT(res, error) {
      return res.status(409).json({ payload: error });
    }

    static GONE(res, error) {
      return res.status(410).json({ payload: error });
    }

    static LENGTH_REQUIRED(res, error) {
      return res.status(411).json({ payload: error });
    }

    static PRECONDITION_FAILED(res, error) {
      return res.status(412).json({ payload: error });
    }

    static PAYLOAD_TOO_LARGE(res, error) {
      return res.status(413).json({ payload: error });
    }

    static URL_TOO_LONG(res, error) {
      return res.status(414).json({ payload: error });
    }

    static UNSUPPORTED_MEDIA_TYPE(res, error) {
      return res.status(415).json({ payload: error });
    }

    static RANGE_NOT_FOUND(res, error) {
      return res.status(416).json({ payload: error });
    }

    static EXPECTATION_FAILED(res, error) {
      return res.status(417).json({ payload: error });
    }

    static IMA_TEA_POT(res, error) {
      return res.status(418).json({ payload: error });
    }

    static MISDIRECTION_REQUEST(res, error) {
      return res.status(421).json({ payload: error });
    }

    static UNPROCESSABLE_ENTITY(res, payload = null) {
      let msg = payload !== null ? payload : "Unprocessable Entity";
      return res.status(422).json({ payload: msg });
    }

    static LOCKED(res, error) {
      return res.status(423).json({ payload: error });
    }

    static FAILED_DEPENDENCY(res, error) {
      return res.status(424).json({ payload: error });
    }

    static UNORDERED_COLLECTION(res, error) {
      return res.status(425).json({ payload: error });
    }

    static UPGRADE_REQUIRED(res, error) {
      return res.status(426).json({ payload: error });
    }

    static PRECONDITION_REQUIRED(res, error) {
      return res.status(428).json({ payload: error });
    }

    static TOO_MANY_REQUESTS(res, error) {
      return res.status(429).json({ payload: error });
    }

    static REQUEST_HEADERFIELDS_TOO_LARGE(res, error) {
      return res.status(431).json({ payload: error });
    }

    static UNAVAILABLE_FOR_LEGAL_REASONS(res, error) {
      return res.status(451).json({ payload: error });
    }
  
    static INTERNAL_SERVER_ERROR(res, payload = null) {
      let msg = payload !== null ? payload : "Internal server error";
      return res.status(500).json({ payload: msg });
    }

    static NOT_IMPLEMENTED(res, error) {
      return res.status(501).json({ payload: error });
    }
  
    static BAD_GATEWAY(res, payload = null) {
      let msg =
        payload !== null ? payload : "Invalid response from upstream server";
      return res.status(502).json({ payload: msg });
    }
  
    static SERVICE_UNAVAILABLE(res, payload = null) {
      let msg = payload !== null ? payload : "Server overload";
      return res.status(503).json({ payload: msg });
    }

    static GATEWAY_TIMEOUT(res, error) {
      return res.status(504).json({ payload: error });
    }

    static HTTP_VERSION_NOT_SUPPORTED(res, error) {
      return res.status(505).json({ payload: error });
    }

    static VARIANT_ALSO_NEGOTIATES(res, error) {
      return res.status(506).json({ payload: error });
    }

    static INSUFFICIENT_STORAGE(res, error) {
      return res.status(507).json({ payload: error });
    }

    static LOOP_DETECTED(res, error) {
      return res.status(508).json({ payload: error });
    }

    static BANDWIDTH_LIMIT_EXCCEEDED(res, error) {
      return res.status(509).json({ payload: error });
    }

    static NOTEXTENTED(res, error) {
      return res.status(510).json({ payload: error });
    }

    static NETWORK_AUTHENTICATION_REQUIRED(res, error) {
      return res.status(511).json({ payload: error });
    }
  }
  
  module.exports = HttpResponse;