package fiuba;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
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
}