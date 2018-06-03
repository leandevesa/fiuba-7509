# language: es
Característica: Valor del proyecto
    
  Escenario: Saber costo de proyecto con 3 tickets
    Dado que mi proyecto tiene "3" tickets de: "10hs,40hs,20hs"
    Cuando se asignan correspondientemente empleados: "jr,sr,jr"
    Entonces el proyecto tiene un costo de "1500"

  Escenario: Saber presupuesto del proyecto
    Dado que mi proyecto tiene un presupuesto de "30000"
    Cuando el proyecto va segun lo planeado
    Entonces el presupuesto de mi proyecto es de "30000"