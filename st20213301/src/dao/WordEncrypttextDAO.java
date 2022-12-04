package dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import common.JDBConnect;
import dto.WordEncrypttextDTO;

public class WordEncrypttextDAO extends JDBConnect {
	public List<WordEncrypttextDTO> wordList(String step) {
		System.out.println("3 decrypt");
		List<WordEncrypttextDTO> worddEncrypttextList = new ArrayList<WordEncrypttextDTO>();
		try {
			String sql = "select * from ST20213301_WORD_ENCRYPTTEXT where step=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, step);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				WordEncrypttextDTO wordEncrypttext = new WordEncrypttextDTO();
				wordEncrypttext.setId(rs.getInt("id"));
				wordEncrypttext.setWord_char(rs.getString("word_char"));
				wordEncrypttext.setStep(rs.getString("step"));
				worddEncrypttextList.add(wordEncrypttext);
			}
			System.out.println("db연결성공");
			Collections.shuffle(worddEncrypttextList);
			return worddEncrypttextList;
		} catch (Exception e) {
			System.out.println("Exception[List] : " + e.getMessage());
		}
		return null;
	}
}
