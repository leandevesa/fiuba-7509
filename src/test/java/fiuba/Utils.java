package fiuba;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;

public final class Utils {
    private Utils() { }
    
    public static Date transformDate(String unaFecha) throws Exception {
        DateFormat format = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
        return format.parse(unaFecha);
    }

    public static Date addMonthsToDate(Date originalDate, int numberOfMonths) {
        Calendar myCal = Calendar.getInstance();
        myCal.setTime(originalDate);    
        myCal.add(Calendar.MONTH, numberOfMonths);    
        return myCal.getTime();
    }

    public static List<Ticket> mockTickets(String tickets) {
        List<String> ticketHsList = Arrays.asList(tickets.split("\\s*,\\s*"));
        List<Ticket> ticketsList = new ArrayList<Ticket>();
        
        for (String ticketHs: ticketHsList) {
            ticketHs = ticketHs.replace("hs", "");
            ticketsList.add(new Ticket("nombre", Integer.parseInt(ticketHs)));
        }

        return ticketsList;
    }

    public static List<Empleado> mockEmpleados(String seniorities) {
        List<String> senioritiesList = Arrays.asList(seniorities.split("\\s*,\\s*"));
        List<Empleado> empleados = new ArrayList<Empleado>();
        
        for (String seniority: senioritiesList) {
            empleados.add(new Empleado("nombre", seniority, "developer"));
        }

        return empleados;
    }
}