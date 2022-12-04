package dao;

import java.util.ArrayList;
import java.util.List;

import common.JDBConnect;
import dto.LogDTO;

public class LogDAO extends JDBConnect {
	public void insertLog(LogDTO dto) {
		try {
			String sql = "insert into st20213301_log(id,nickname,theme,step,incorrect,maxspeed,correctper,created_at)";
			sql += " values((select nvl(max(id),0) + 1 from st20213301_log),?,?,?,?,?,?,?)";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getNickname());
			pstmt.setString(2, dto.getTheme());
			pstmt.setString(3, dto.getStep());
			pstmt.setString(4, dto.getIncorrect());
			pstmt.setString(5, dto.getMaxspeed());
			pstmt.setString(6, dto.getCorrectper());
			pstmt.setString(7, dto.getCreated_at());
			pstmt.executeUpdate();
			System.out.println("insertKeyboardLog() is finished");
		} catch (Exception e) {
			System.out.println("Exception[insertKeyboardLog] : " + e.getMessage());
		}
	}

	public List<LogDTO> logList() {
		List<LogDTO> loglist = new ArrayList<LogDTO>();

		try {
			String sql = "select * from st20213301_log";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				LogDTO dto = new LogDTO();
				dto.setId(rs.getInt("id"));
				dto.setNickname(rs.getString("nickname"));
				dto.setTheme(rs.getString("theme"));
				dto.setStep(rs.getString("step"));
				dto.setIncorrect(rs.getString("incorrect"));
				dto.setMaxspeed(rs.getString("maxspeed"));
				dto.setCorrectper(rs.getString("correctper"));
				dto.setCreated_at(rs.getString("created_at"));
				loglist.add(dto);
			}
			System.out.println("db연결성공");
			return loglist;
		} catch (Exception e) {
			System.out.println("Exception[List] : " + e.getMessage());
		}
		return null;
	}
}
