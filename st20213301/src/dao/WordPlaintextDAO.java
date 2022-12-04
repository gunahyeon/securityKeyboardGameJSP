package dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import common.JDBConnect;
import dto.WordPlaintextDTO;

public class WordPlaintextDAO extends JDBConnect {
	public List<WordPlaintextDTO> wordList(String step) {
		List<WordPlaintextDTO> wordPlaintextList = new ArrayList<WordPlaintextDTO>();
		System.out.println(step);
		try {
			String sql = "select * from ST20213301_WORD_PLAINTEXT where step=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, step);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				WordPlaintextDTO wordPlaintext = new WordPlaintextDTO();
				wordPlaintext.setId(rs.getInt("id"));
				wordPlaintext.setWord_char(rs.getString("word_char"));
				wordPlaintext.setStep(rs.getString("step"));
				wordPlaintextList.add(wordPlaintext);
			}
			System.out.println("db연결성공");
			Collections.shuffle(wordPlaintextList);
			return wordPlaintextList;
		} catch (Exception e) {
			System.out.println("Exception[List] : " + e.getMessage());
		}
		return null;
	}
}
