package fiuba;

import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import static org.junit.Assert.assertFalse;

/**
 * Created by nicopaez on 5/16/17.
 */
public class ProyectoSteps {

    private Proyecto proyecto;
    private final String NOMBRE = "Un Proyecto";
    private final String TIPO = "Un Tipo";
    private final Date FECHA_INICIO = new Date(2018, 2, 3);
    private final Date FECHA_FIN = new Date(2019, 2, 3);

    private void crearProyectoConFechaFin(Date unaFechaFin) {
        proyecto = new Proyecto(NOMBRE, TIPO, FECHA_INICIO, unaFechaFin);
    }

    private Date transformDate(String unaFecha) throws Exception {
        DateFormat format = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
        return format.parse(unaFecha);
    }

    @Dado("^que mi proyecto debe estar listo para el \"(.*?)\"$")
    public void establecer_fecha_finalizacion(String fechaFinalizacion) throws Throwable {
        Date fechaFin = transformDate(fechaFinalizacion);
        crearProyectoConFechaFin(fechaFin);
    }

    @Cuando("^el proyecto va segun lo planeado$")
    public void proyecto_en_tiempo() throws Throwable {
        // El estado no se modifica
    }

    @Entonces("^la fecha de finalizacion debe ser \"(.*?)\"$")
    public void la_operacion_es_rechazada_y_el_saldo_final_es_pesos(String fechaFinalizacion) throws Throwable {
        Date fechaFin = transformDate(fechaFinalizacion);
        assertTrue(fechaFin.equals(proyecto.getFechaFin()));
    }

}
