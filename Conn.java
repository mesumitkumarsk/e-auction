package eauction;

import java.sql.*;

public class Conn {
    
    Connection c;
    Statement s;
    
    public Conn() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            c = DriverManager.getConnection("jdbc:mysql:///e_auction", "root", "yourpassword");
            
            s = c.createStatement();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
