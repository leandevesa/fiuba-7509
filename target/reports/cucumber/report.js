$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("costoProyecto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Valor del proyecto",
  "description": "",
  "id": "valor-del-proyecto",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Saber costo de proyecto con 3 tickets",
  "description": "",
  "id": "valor-del-proyecto;saber-costo-de-proyecto-con-3-tickets",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 5,
  "name": "que mi proyecto tiene \"3\" tickets de: \"10hs,40hs,20hs\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "se asignan correspondientemente empleados: \"jr,sr,jr\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 7,
  "name": "el proyecto tiene un costo de \"1500\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    },
    {
      "val": "10hs,40hs,20hs",
      "offset": 39
    }
  ],
  "location": "ProyectoSteps.establecer_tickets(String,String)"
});
formatter.result({
  "duration": 234428517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jr,sr,jr",
      "offset": 44
    }
  ],
  "location": "ProyectoSteps.se_asignan_empleados(String)"
});
formatter.result({
  "duration": 372326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 31
    }
  ],
  "location": "ProyectoSteps.el_proyecto_tiene_costo_de(double)"
});
formatter.result({
  "duration": 4555026,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Saber presupuesto del proyecto",
  "description": "",
  "id": "valor-del-proyecto;saber-presupuesto-del-proyecto",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 10,
  "name": "que mi proyecto tiene un presupuesto de \"30000\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "el proyecto va segun lo planeado",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
  "name": "el presupuesto de mi proyecto es de \"30000\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 41
    }
  ],
  "location": "ProyectoSteps.establecer_presupuesto(double)"
});
formatter.result({
  "duration": 445711,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 48972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 37
    }
  ],
  "location": "ProyectoSteps.el_proyecto_tiene_presupuesto_de(double)"
});
formatter.result({
  "duration": 243448,
  "status": "passed"
});
formatter.uri("estadoProyecto.feature");
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
  "duration": 1271412,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 41627,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.el_proyecto_esta_en_tiempo()"
});
formatter.result({
  "duration": 100441,
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
  "duration": 677419,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 31766,
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
  "duration": 402926,
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
  "duration": 562634,
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
  "duration": 394053,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.el_proyecto_esta_atrasado()"
});
formatter.result({
  "duration": 91119,
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
  "duration": 619591,
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
  "duration": 241348,
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
  "duration": 338394,
  "status": "passed"
});
});