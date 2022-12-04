package dao;

//import java.util.ArrayList;
//import java.util.List;

import common.JDBConnect;
import dto.UserDTO;

public class UserDAO extends JDBConnect {
	// 회원가입
	public void insertUser(UserDTO dto) {
		System.out.println("df");
		System.out.println("call");
		try {
			String sql = "insert into st20213301_user(id,nickname,password)";
			sql += " values((select nvl(max(id),0) + 1 from st20213301_user),?,?)";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getNickname());
			pstmt.setString(2, dto.getPassword());
			pstmt.executeUpdate();
			System.out.println("insertUser() is finished");
		} catch (Exception e) {
			System.out.println("Exception[insertUser] : " + e.getMessage());
		}
	}

	// 로그인
	public String loginUser(String nickname, String password) {
		try {
			String sql = "select nickname,password from st20213301_user";
			sql += " where nickname=? and password=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, nickname);
			pstmt.setString(2, password);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				if (password.equals(rs.getNString("password"))) {
					return nickname;
				} else {
					return "Loginfail";
				}
			}
		} catch (Exception e) {
			System.out.println("Exception[loginUser] : " + e.getMessage());
		}
		return "Loginfail";
	}
//	
//	public List<MyFileDTO> myFileList() {
//		List<MyFileDTO> myList = new ArrayList<MyFileDTO>();
//		
//		try {
//			String sql = "select * from myfile";
//			pstmt = con.prepareStatement(sql);
//			rs = pstmt.executeQuery();
//			while(rs.next()) {
//				MyFileDTO dto = new MyFileDTO();
//				dto.setIdx(rs.getInt("idx"));
//				dto.setName(rs.getString("name"));
//				dto.setCate(rs.getString("cate"));
//				dto.setTitle(rs.getString("title"));
//				dto.setOfile(rs.getString("ofile"));
//				dto.setSfile(rs.getString("sfile"));
//				dto.setPostdate(rs.getString("postdate"));
//				myList.add(dto);
//			}
//			System.out.println("db��ȸ����");
//			return myList;
//		} catch(Exception e) {
//			System.out.println("Exception[List] : " + e.getMessage());
//		}
//		return null;
//	}
}
