package fiuba;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Proyecto {
    private String nombre;
    private Date fechaInicio;
    private Date fechaFinOriginal;
    private Date fechaFinActualizada;
    private String tipo;
    private double presupuesto;
    private double gastos;
    private String estado;
    private List<String> requisitos;
    private List<Ticket> tickets;

    public Proyecto(String nombre, String tipo, Date fechaInicio, Date fechaFin) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaInicio = fechaInicio;
        this.fechaFinOriginal = fechaFin;
        this.gastos = 0;
        this.presupuesto = 0;
        this.tickets = new ArrayList<Ticket>();
    }

    public void agregarTicket(Ticket ticket) {
        tickets.add(ticket);
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public double getCostoReal() {
        double costo = 0;
        for (Ticket ticket: tickets) {
            costo += ticket.getCosto();
        }
        return costo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setPresupuesto(double presupuesto) {
        this.presupuesto = presupuesto;
    }

    public double getPresupuesto() {
        return presupuesto;
    }
    
    public void agregarGasto(double gasto) {
        gastos += gasto;
    }

    public void updateFechaFin(Date unaFecha) {
        this.fechaFinActualizada = unaFecha;
    }

    public Date getFechaFin() {
        return (seActualizoFechaFin() ? this.fechaFinActualizada : this.fechaFinOriginal);
    }

    public boolean estaAtrasado() {
        if (seActualizoFechaFin()) {
            return (fechaFinActualizada.compareTo(fechaFinOriginal) > 0);
        }
        return false;
    }

    private boolean seActualizoFechaFin() {
        return (this.fechaFinActualizada != null);
    }
}