# language: es
Característica: Administrar proyectos
    
  Escenario: Saber cantidad de empleados de un proyecto
    Dado que doy de alta un proyecto
    Cuando agrego empleados: "jr,sr,jr"
    Entonces el proyecto tiene "3" empleados

  Escenario: Saber nombre de cliente del proyecto
    Dado que doy de alta un proyecto para "pepito srl"
    Cuando el proyecto va segun lo planeado
    Entonces puedo ver que el proyecto es para "pepito srl"

  Escenario: Conocer tareas asignadas al proyecto
    Dado que doy de alta un proyecto
    Cuando agrego "3" tareas
    Entonces puedo ver que el proyecto tiene "3" tareas