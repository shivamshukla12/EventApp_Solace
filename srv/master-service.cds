service EventApp {
  entity CreateMessage {
    message_uuid      : String;
    time              : String;
    tenant            : String;
    org_id            : String;
    space_id          : String;
    app_or_service_id : String;
    als_service_id    : String;
    user              : String;
    category          : String;
    format_version    : String;
    message           : String;
  }

  entity Fedex {
    ID       : Integer;
    SHIPNO   : String;
    TEXT     : String;
    LOCATION : String;
    STATUS   : String;
    LATTITUDE : String;
    LONGITUDE :String;
    MODE      : String;
    SHIPPERNAME: String;
    SHIPPERADDRESS:String;
    CITY: String;
    STATE: String;
    ZIPCODE: String

  }

}
