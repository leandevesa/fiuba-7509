$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("proyecto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Creacion de proyecto",
  "description": "",
  "id": "creacion-de-proyecto",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Proyecto con fecha de finalizacion en tiempo",
  "description": "",
  "id": "creacion-de-proyecto;proyecto-con-fecha-de-finalizacion-en-tiempo",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 5,
  "name": "que mi proyecto debe estar listo para el \"16/07/2018\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "el proyecto va segun lo planeado",
  "keyword": "Cuando "
});
formatter.step({
  "line": 7,
  "name": "la fecha de finalizacion debe ser \"16/07/2018\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "16/07/2018",
      "offset": 42
    }
  ],
  "location": "ProyectoSteps.establecer_fecha_finalizacion(String)"
});
formatter.result({
  "duration": 182103669,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 41510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16/07/2018",
      "offset": 35
    }
  ],
  "location": "ProyectoSteps.la_operacion_es_rechazada_y_el_saldo_final_es_pesos(String)"
});
formatter.result({
  "duration": 3552718,
  "status": "passed"
});
});