$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("administrarProyectos.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Administrar proyectos",
  "description": "",
  "id": "administrar-proyectos",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Saber cantidad de empleados de un proyecto",
  "description": "",
  "id": "administrar-proyectos;saber-cantidad-de-empleados-de-un-proyecto",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 5,
  "name": "que doy de alta un proyecto",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "agrego empleados: \"jr,sr,jr\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 7,
  "name": "el proyecto tiene \"3\" empleados",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ProyectoSteps.dar_alta_proyecto()"
});
formatter.result({
  "duration": 147264672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jr,sr,jr",
      "offset": 19
    }
  ],
  "location": "ProyectoSteps.agrego_empleados(String)"
});
formatter.result({
  "duration": 5556537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "ProyectoSteps.el_proyecto_tiene_costo_de(int)"
});
formatter.result({
  "duration": 4638108,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Saber nombre de cliente del proyecto",
  "description": "",
  "id": "administrar-proyectos;saber-nombre-de-cliente-del-proyecto",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 10,
  "name": "que doy de alta un proyecto para \"pepito srl\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "el proyecto va segun lo planeado",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
  "name": "puedo ver que el proyecto es para \"pepito srl\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "pepito srl",
      "offset": 34
    }
  ],
  "location": "ProyectoSteps.dar_alta_proyecto_con_cliente(String)"
});
formatter.result({
  "duration": 261095,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 45320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pepito srl",
      "offset": 35
    }
  ],
  "location": "ProyectoSteps.el_proyecto_es_para(String)"
});
formatter.result({
  "duration": 185195,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Conocer tareas asignadas al proyecto",
  "description": "",
  "id": "administrar-proyectos;conocer-tareas-asignadas-al-proyecto",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 15,
  "name": "que doy de alta un proyecto",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "agrego \"3\" tareas",
  "keyword": "Cuando "
});
formatter.step({
  "line": 17,
  "name": "puedo ver que el proyecto tiene \"3\" tareas",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ProyectoSteps.dar_alta_proyecto()"
});
formatter.result({
  "duration": 196609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    }
  ],
  "location": "ProyectoSteps.agrego_empleados(int)"
});
formatter.result({
  "duration": 293834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 33
    }
  ],
  "location": "ProyectoSteps.el_proyecto_tiene_tareas(int)"
});
formatter.result({
  "duration": 238245,
  "status": "passed"
});
formatter.uri("costoProyecto.feature");
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
  "duration": 752923,
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
  "duration": 282116,
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
  "duration": 572248,
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
  "duration": 252947,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 35309,
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
  "duration": 220059,
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
  "duration": 1403194,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 55472,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.el_proyecto_esta_en_tiempo()"
});
formatter.result({
  "duration": 166231,
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
  "duration": 738815,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.proyecto_en_tiempo()"
});
formatter.result({
  "duration": 35319,
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
  "duration": 600884,
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
  "duration": 10599071,
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
  "duration": 407957,
  "status": "passed"
});
formatter.match({
  "location": "ProyectoSteps.el_proyecto_esta_atrasado()"
});
formatter.result({
  "duration": 87465,
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
  "duration": 478960,
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
  "duration": 331362,
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
  "duration": 523875,
  "status": "passed"
});
});