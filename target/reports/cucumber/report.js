$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("proyecto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Estado de proyecto",
  "description": "",
  "id": "estado-de-proyecto",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Proyecto esta en tiempo",
  "description": "",
  "id": "estado-de-proyecto;proyecto-esta-en-tiempo",
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
  "name": "el proyecto esta en tiempo",
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
  "duration": 166234866,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 45353,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.el_proyecto_esta_en_tiempo()"
});
formatter.result({
  "duration": 7958621,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Proyecto sin problemas con misma fecha de finalizacion",
  "description": "",
  "id": "estado-de-proyecto;proyecto-sin-problemas-con-misma-fecha-de-finalizacion",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 10,
  "name": "que mi proyecto debe estar listo para el \"16/07/2018\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "el proyecto va segun lo planeado",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
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
  "duration": 644922,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 37300,
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
  "duration": 535443,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Proyecto atrasado",
  "description": "",
  "id": "estado-de-proyecto;proyecto-atrasado",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 15,
  "name": "que mi proyecto debe estar listo para el \"16/07/2018\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "hay problemas y se atrasa \"6\" meses",
  "keyword": "Cuando "
});
formatter.step({
  "line": 17,
  "name": "el proyecto esta atrasado",
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
  "duration": 1603931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 27
    }
  ],
  "location": "ProyectoSteps.proyecto_se_atrasa_meses(int)"
});
formatter.result({
  "duration": 2041155,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.el_proyecto_esta_atrasado()"
});
formatter.result({
  "duration": 92941,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Proyecto se atrasa 3 meses",
  "description": "",
  "id": "estado-de-proyecto;proyecto-se-atrasa-3-meses",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 20,
  "name": "que mi proyecto debe estar listo para el \"16/07/2018\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "hay problemas y se atrasa \"3\" meses",
  "keyword": "Cuando "
});
formatter.step({
  "line": 22,
  "name": "la fecha de finalizacion debe ser \"16/10/2018\"",
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
  "duration": 634748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "ProyectoSteps.proyecto_se_atrasa_meses(int)"
});
formatter.result({
  "duration": 301430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16/10/2018",
      "offset": 35
    }
  ],
  "location": "ProyectoSteps.la_operacion_es_rechazada_y_el_saldo_final_es_pesos(String)"
});
formatter.result({
  "duration": 563290,
  "status": "passed"
});
});