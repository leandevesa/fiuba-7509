package fiuba;

import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertFalse;

/**
 * Created by nicopaez on 5/16/17.
 */
public class ProyectoSteps {

    private Proyecto proyecto;
    private final String NOMBRE = "Un Proyecto";
    private final String TIPO = "Un Tipo";
    private final String NOMBRE_CLIENTE = "Un cliente";
    private final Date FECHA_INICIO = new Date(2018, 2, 3);
    private final Date FECHA_FIN = new Date(2019, 2, 3);

    private void crearProyectoConFechaFin(Date unaFechaFin) {
        proyecto = new Proyecto(NOMBRE, TIPO, FECHA_INICIO, unaFechaFin, NOMBRE_CLIENTE);
    }

    private void crearProyecto() {
        proyecto = new Proyecto(NOMBRE, TIPO, FECHA_INICIO, FECHA_FIN, NOMBRE_CLIENTE);
    }

    private void crearProyectoConNombreCliente(String nombreCliente) {
        proyecto = new Proyecto(NOMBRE, TIPO, FECHA_INICIO, FECHA_FIN, nombreCliente);
    }

    @Dado("^que mi proyecto debe estar listo para el \"(.*?)\"$")
    public void establecer_fecha_finalizacion(String fechaFinalizacion) throws Throwable {
        Date fechaFin = Utils.transformDate(fechaFinalizacion);
        crearProyectoConFechaFin(fechaFin);
    }

    @Dado("^que doy de alta un proyecto$")
    public void dar_alta_proyecto() throws Throwable {
        crearProyecto();
    }

    @Dado("^que doy de alta un proyecto para \"(.*?)\"$")
    public void dar_alta_proyecto_con_cliente(String nombreCliente) throws Throwable {
        crearProyectoConNombreCliente(nombreCliente);
    }

    @Dado("^que mi proyecto tiene \"(.*?)\" tickets de: \"(.*?)\"$")
    public void establecer_tickets(String fechaFinalizacion, String horas) throws Throwable {
        crearProyecto();
        List<Ticket> tickets = Utils.mockTickets(horas);
        for (Ticket ticket: tickets) {
            proyecto.agregarTicket(ticket);
        }
    }

    @Dado("^que mi proyecto tiene un presupuesto de \"(.*?)\"$")
    public void establecer_presupuesto(double presupuesto) throws Throwable {
        crearProyecto();
        proyecto.setPresupuesto(presupuesto);
    }

    @Cuando("^el proyecto va segun lo planeado$")
    public void proyecto_en_tiempo() throws Throwable {
        // El estado no se modifica
    }

    @Cuando("^se asignan correspondientemente empleados: \"(.*?)\"$")
    public void se_asignan_empleados(String seniorities) throws Throwable {
        List<Empleado> empleados = Utils.mockEmpleados(seniorities);
        List<Ticket> tickets = proyecto.getTickets();
        
        for (int i = 0; i < empleados.size(); i++) {
            Ticket ticket = tickets.get(i);
            Empleado empleado = empleados.get(i);
            ticket.asignarEmpleado(empleado);
            proyecto.agregarEmpleado(empleado);
        }
    }

    @Cuando("^agrego empleados: \"(.*?)\"$")
    public void agrego_empleados(String seniorities) throws Throwable {
        List<Empleado> empleados = Utils.mockEmpleados(seniorities);
        
        for (int i = 0; i < empleados.size(); i++) {
            Empleado empleado = empleados.get(i);
            proyecto.agregarEmpleado(empleado);
        }
    }

    @Cuando("^agrego \"(.*?)\" tareas$")
    public void agrego_empleados(int cantTareas) throws Throwable {
        for (int i = 0; i < cantTareas; i++) {
            Ticket ticket = new Ticket("una tarea", 1);
            proyecto.agregarTicket(ticket);
        }
    }

    @Cuando("^hay problemas y se atrasa \"(.*?)\" meses$")
    public void proyecto_se_atrasa_meses(int cantMeses) throws Throwable {
        Date nuevaFechaFin = Utils.addMonthsToDate(proyecto.getFechaFin(), cantMeses);
        proyecto.updateFechaFin(nuevaFechaFin);
    }

    @Entonces("^la fecha de finalizacion debe ser \"(.*?)\"$")
    public void la_operacion_es_rechazada_y_el_saldo_final_es_pesos(String fechaFinalizacion) throws Throwable {
        Date fechaFin = Utils.transformDate(fechaFinalizacion);
        assertTrue(fechaFin.equals(proyecto.getFechaFin()));
    }

    @Entonces("^el proyecto esta atrasado$")
    public void el_proyecto_esta_atrasado() throws Throwable {
        assertTrue(proyecto.estaAtrasado());
    }

    @Entonces("^el proyecto esta en tiempo$")
    public void el_proyecto_esta_en_tiempo() throws Throwable {
        assertFalse(proyecto.estaAtrasado());
    }

    @Entonces("^el proyecto tiene un costo de \"(.*?)\"$")
    public void el_proyecto_tiene_costo_de(double costo) throws Throwable {
        assertEquals(costo, proyecto.getCostoReal(), 1);
    }

    @Entonces("^el proyecto tiene \"(.*?)\" empleados$")
    public void el_proyecto_tiene_costo_de(int cantEmpleados) throws Throwable {
        assertEquals(cantEmpleados, proyecto.getCantidadEmpleados(), 1);
    }

    @Entonces("^el presupuesto de mi proyecto es de \"(.*?)\"$")
    public void el_proyecto_tiene_presupuesto_de(double presupuesto) throws Throwable {
        assertEquals(presupuesto, proyecto.getPresupuesto(), 1);
    }

    @Entonces("^puedo ver que el proyecto es para \"(.*?)\"$")
    public void el_proyecto_es_para(String nombreCliente) throws Throwable {
        assertEquals(nombreCliente, proyecto.getNombreCliente());
    }

    @Entonces("^puedo ver que el proyecto tiene \"(.*?)\" tareas$")
    public void el_proyecto_tiene_tareas(int cantTareas) throws Throwable {
        assertEquals(cantTareas, proyecto.getTickets().size());
    }
}
