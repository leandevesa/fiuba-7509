package fiuba;

public class Empleado {

    private String nombre;
    private String seniority;
    private String rol;

    public Empleado(String nombre, String seniority, String rol) {
        this.nombre = nombre;
        this.seniority = seniority;
        this.rol = rol;
    }

    public String getSeniority() {
        return seniority;
    }

    public double getCostoPorHora() {

        // Como desperdiciar anios de ensenanza de OOP ==>

        switch (seniority) {
            case "jr": return 10;
            case "ssr": return 20;
            case "sr": return 30;
            default: return 0;
        }
    }
}