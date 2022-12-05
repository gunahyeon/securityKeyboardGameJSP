package dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import common.JDBConnect;
import dto.SentencePlaintextDTO;

public class SentencePlaintextDAO extends JDBConnect {
	public List<SentencePlaintextDTO> sentenceList() {
		List<SentencePlaintextDTO> sentencePlaintextList = new ArrayList<SentencePlaintextDTO>();

		try {
			String sql = "select * from st20213301_sentence_plaintext";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				SentencePlaintextDTO sentencePlaintext = new SentencePlaintextDTO();
				sentencePlaintext.setId(rs.getInt("id"));
				sentencePlaintext.setSentence_char(rs.getString("sentence_char"));
				sentencePlaintextList.add(sentencePlaintext);
			}
			System.out.println("db연결성공");
			Collections.shuffle(sentencePlaintextList);
			return sentencePlaintextList;
		} catch (Exception e) {
			System.out.println("Exception[List] : " + e.getMessage());
		}
		return null;
	}
}
