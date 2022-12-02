package common;

import java.sql.*;

public class JDBConnect {
	public Connection con;
	public PreparedStatement pstmt;
	public ResultSet rs;
	
	public JDBConnect() {
		try {
			Class.forName("org.h2.Driver");
			String url = "jdbc:h2:tcp://localhost/~/test";
			String user = "sa";
			String password = "";
			con = DriverManager.getConnection(url,user,password);
			System.out.println("DB연결성공");
		} catch(Exception e) {
			System.out.println("Exception[Connection] : " + e.getMessage());
		}
		
	}
	public void close() {
		try {
			if (rs!= null) {
				rs.close();
			}
			if(pstmt != null) {
				pstmt.close();
			}
			if(con != null) {
				con.close();
			}
		} catch(Exception e) {
			System.out.println("Exception[close] : " + e.getMessage());
		}
	}
}
