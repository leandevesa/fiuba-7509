package fiuba;

public class Ticket {

    String nombre;
    int horasDesignadas;
    String estado;
    Empleado empleadoAsignado;

    public Ticket(String nombre, int horasDesignadas) {
        this.nombre = nombre;
        this.horasDesignadas = horasDesignadas;
    }

    public void asignarEmpleado(Empleado empleado) {
        empleadoAsignado = empleado;
    }

    public double getCosto() {
        if (empleadoAsignado != null) {
            return (empleadoAsignado.getCostoPorHora() * horasDesignadas);
        } else {
            return 0;
        }
    }
}