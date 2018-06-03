$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("debito.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Debito de fondos",
  "description": "",
  "id": "debito-de-fondos",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Caja de ahorro con saldo suficiente",
  "description": "",
  "id": "debito-de-fondos;caja-de-ahorro-con-saldo-suficiente",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 5,
  "name": "que mi caja de ahorro tiene un saldo de \"100\" pesos",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "cuando debito \"50\" pesos",
  "keyword": "Cuando "
});
formatter.step({
  "line": 7,
  "name": "el saldo final es de \"50\" pesos",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 41
    }
  ],
  "location": "DebitoSteps.que_mi_caja_de_ahorro_tiene_un_saldo_de_pesos(int)"
});
formatter.result({
  "duration": 194202875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    }
  ],
  "location": "DebitoSteps.cuando_debito_pesos(int)"
});
formatter.result({
  "duration": 324908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 22
    }
  ],
  "location": "DebitoSteps.el_saldo_final_es_de_pesos(int)"
});
formatter.result({
  "duration": 2484769,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Caja de ahorro sin saldo suficiente",
  "description": "",
  "id": "debito-de-fondos;caja-de-ahorro-sin-saldo-suficiente",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 10,
  "name": "que mi caja de ahorro tiene un saldo de \"10\" pesos",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "cuando debito \"20\" pesos",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
  "name": "la operacion es rechazada y el saldo final es \"10\" pesos",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "DebitoSteps.que_mi_caja_de_ahorro_tiene_un_saldo_de_pesos(int)"
});
formatter.result({
  "duration": 144132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "DebitoSteps.cuando_debito_pesos(int)"
});
formatter.result({
  "duration": 321340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "DebitoSteps.la_operacion_es_rechazada_y_el_saldo_final_es_pesos(int)"
});
formatter.result({
  "duration": 228381,
  "status": "passed"
});
});