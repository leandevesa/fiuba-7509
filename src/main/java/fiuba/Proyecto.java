package fiuba;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

public class Proyecto {
    private String nombre;
    private Date fechaInicio;
    private Date fechaFinOriginal;
    private Date fechaFinActualizada;
    private String tipo;
    private BigDecimal presupuesto;
    private String estado;
    private List<String> requisitos;

    public Proyecto(String nombre, String tipo, Date fechaInicio, Date fechaFin) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaInicio = fechaInicio;
        this.fechaFinOriginal = fechaFin;
    }

    public String getNombre() {
        return this.nombre;
    }

    public boolean estaAtrasado() {
        if (seActualizoFechaFin()) {
            return (fechaFinActualizada.compareTo(fechaFinOriginal) > 0);
        }
        return false;
    }

    public Date getFechaFin() {
        return (seActualizoFechaFin() ? this.fechaFinActualizada : this.fechaFinOriginal);
    }

    public void updateFechaFin(Date unaFecha) {
        this.fechaFinActualizada = unaFecha;
    }

    private boolean seActualizoFechaFin() {
        return (this.fechaFinActualizada != null);
    }
}