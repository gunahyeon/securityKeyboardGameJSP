package util;

import org.apache.commons.codec.binary.Base64;
import org.bouncycastle.pqc.math.linearalgebra.ByteUtils;

public class EncodeOrDecode {
	public String encrypt(String plainText) throws Exception {
		byte[] encryptText = plainText.getBytes();
		byte[] encodedData = Base64.encodeBase64(encryptText);
		System.out.println(ByteUtils.toHexString(encodedData.toString().getBytes()));
		return new String(encodedData);
	}

	public String decrypt(String encryptText) throws Exception {
		byte[] decodedData = Base64.decodeBase64(encryptText.getBytes());
		return new String(decodedData);
	}

}
