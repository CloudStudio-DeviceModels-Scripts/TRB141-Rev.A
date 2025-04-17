function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  config.addressLabel = {en: "IMEI", es: "IMEI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // This function allows you to indicate the initial endpoint configuration
  // when a device is created using this model. This improves end-user 
  // experience significantly, because it allows the platform to create
  // all endpoints included in the device automatically when the device
  // is created.

  // In the code below, two endpoints are created. The first is a
  // temperature sensor, while the second one is a carbon dioxide sensor.

  var eLE = endpoints.addEndpoint("1", "Estado Línea Eléctrica", endpointType.genericSensor);
  eLE.variableTypeId = 1000;

  var alert = eLE.addAlert();
   alert.variableTypeId = 1000;
   alert.conditionType = conditionType.equal;
   alert.threshold = 0;
   alert.normalConditionType = conditionType.notEqual;
   alert.normalThreshold = 0;
   alert.severity = alarmSeverity.medium;

  var eUPS = endpoints.addEndpoint("2", "Estado UPS", endpointType.genericSensor);
  eUPS.variableTypeId = 1001;

  var alert = eUPS.addAlert();
   alert.variableTypeId = 1001;
   alert.conditionType = conditionType.equal;
   alert.threshold = 0;
   alert.normalConditionType = conditionType.notEqual;
   alert.normalThreshold = 0;
   alert.severity = alarmSeverity.high;
   
  var eLS = endpoints.addEndpoint("3", "Estado Luces Semáforo", endpointType.genericSensor);
  eLS.variableTypeId = 1002;

  var alert = eLS.addAlert();
   alert.variableTypeId = 1002;
   alert.conditionType = conditionType.equal;
   alert.threshold = 0;
   alert.normalConditionType = conditionType.notEqual;
   alert.normalThreshold = 0;
   alert.severity = alarmSeverity.high;

  var eCS = endpoints.addEndpoint("4", "Estado Conectado Sistema", endpointType.genericSensor);
  eCS.variableTypeId = 1003;

  var alert = eCS.addAlert();
   alert.variableTypeId = 1003;
   alert.conditionType = conditionType.lower;
   alert.threshold = 1;
   alert.normalConditionType = conditionType.greaterOrEqual;
   alert.normalThreshold = 1;
   alert.severity = alarmSeverity.low;

}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  if (address.length != 15) {
     result.ok = false;
     result.errorMessage = {
       en: "The IMEI must be 15 characters long", 
       es: "El IMEI debe tener exactamente 15 caracteres"
     };
     };
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  // rules.canCreateEndpoints = false;
}