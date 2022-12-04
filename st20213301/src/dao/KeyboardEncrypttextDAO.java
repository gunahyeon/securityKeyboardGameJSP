package dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import common.JDBConnect;
import dto.KeyboardEncrypttextDTO;

public class KeyboardEncrypttextDAO extends JDBConnect {
	public List<KeyboardEncrypttextDTO> keyboardList() {
		List<KeyboardEncrypttextDTO> keyboardEncrypttextList = new ArrayList<KeyboardEncrypttextDTO>();

		try {
			String sql = "select * from ST20213301_KEYBOARD_ENCRYPTTEXT";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				KeyboardEncrypttextDTO keyboardEncrypttext = new KeyboardEncrypttextDTO();
				keyboardEncrypttext.setId(rs.getInt("id"));
				keyboardEncrypttext.setKeyboard_char(rs.getString("keyboard_char"));
				keyboardEncrypttextList.add(keyboardEncrypttext);
			}
			System.out.println("db연결성공");
			Collections.shuffle(keyboardEncrypttextList);
			return keyboardEncrypttextList;
		} catch (Exception e) {
			System.out.println("Exception[List] : " + e.getMessage());
		}
		return null;
	}

}
