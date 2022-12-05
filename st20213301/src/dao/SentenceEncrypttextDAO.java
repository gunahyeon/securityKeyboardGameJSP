package dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import common.JDBConnect;
import dto.SentenceEncrypttextDTO;

public class SentenceEncrypttextDAO extends JDBConnect {
	public List<SentenceEncrypttextDTO> sentenceList() {
		List<SentenceEncrypttextDTO> sentenceEncrypttextList = new ArrayList<SentenceEncrypttextDTO>();

		try {
			String sql = "select * from st20213301_sentence_encrypttext";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				SentenceEncrypttextDTO sentenceEncrypttext = new SentenceEncrypttextDTO();
				sentenceEncrypttext.setId(rs.getInt("id"));
				sentenceEncrypttext.setSentence_char(rs.getString("sentence_char"));
				sentenceEncrypttextList.add(sentenceEncrypttext);
			}
			System.out.println("db연결성공");
			Collections.shuffle(sentenceEncrypttextList);
			return sentenceEncrypttextList;
		} catch (Exception e) {
			System.out.println("Exception[List] : " + e.getMessage());
		}
		return null;
	}
}
