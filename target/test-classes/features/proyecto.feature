# language: es
Característica: Estado de proyecto
    
  Escenario: Proyecto esta en tiempo
    Dado que mi proyecto debe estar listo para el "16/07/2018"
    Cuando el proyecto va segun lo planeado
    Entonces el proyecto esta en tiempo

  Escenario: Proyecto sin problemas con misma fecha de finalizacion
    Dado que mi proyecto debe estar listo para el "16/07/2018"
    Cuando el proyecto va segun lo planeado
    Entonces la fecha de finalizacion debe ser "16/07/2018"

  Escenario: Proyecto atrasado
    Dado que mi proyecto debe estar listo para el "16/07/2018"
    Cuando hay problemas y se atrasa "6" meses
    Entonces el proyecto esta atrasado

  Escenario: Proyecto se atrasa 3 meses
    Dado que mi proyecto debe estar listo para el "16/07/2018"
    Cuando hay problemas y se atrasa "3" meses
    Entonces la fecha de finalizacion debe ser "16/10/2018"