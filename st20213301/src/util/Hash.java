package util;

import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.bouncycastle.pqc.math.linearalgebra.ByteUtils;

public class Hash {
	public String getHash(String plainText) throws NoSuchAlgorithmException {
		Charset charset = Charset.forName("utf-8");
		MessageDigest md = MessageDigest.getInstance("SHA-256");

		md.update(plainText.getBytes(charset));
		byte[] hash = md.digest();
		return ByteUtils.toHexString(hash);
//		return hash.toString();
	}
//	public String checkHash(String plainText) throws NoSuchAlgorithmException {
//		Charset charset = Charset.forName("utf-8");
//		MessageDigest md = MessageDigest.getInstance("SHA-256");
//
//		md.update(plainText.getBytes(charset));
//		byte[] hash = md.digest();
//		return ByteUtils.toHexString(hash);
////		return hash.toString();
//	}
}
