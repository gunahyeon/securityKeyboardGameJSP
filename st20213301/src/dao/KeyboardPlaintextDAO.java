package dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import common.JDBConnect;
import dto.KeyboardPlaintextDTO;

public class KeyboardPlaintextDAO extends JDBConnect {
	public List<KeyboardPlaintextDTO> keyboardList() {
		List<KeyboardPlaintextDTO> keyboardPlaintextList = new ArrayList<KeyboardPlaintextDTO>();

		try {
			String sql = "select * from st20213301_keyboard_plaintext";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				KeyboardPlaintextDTO keyboardPlaintext = new KeyboardPlaintextDTO();
				keyboardPlaintext.setId(rs.getInt("id"));
				keyboardPlaintext.setKeyboard_char(rs.getString("keyboard_char"));
				keyboardPlaintextList.add(keyboardPlaintext);
			}
			System.out.println("db연결성공");
			Collections.shuffle(keyboardPlaintextList);
			return keyboardPlaintextList;
		} catch (Exception e) {
			System.out.println("Exception[List] : " + e.getMessage());
		}
		return null;
	}

}
