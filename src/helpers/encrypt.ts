import CryptoJS from "crypto-js";

const SECRET_KEY = String(process.env.NEXT_PUBLIC_HASH) || "8";

// biome-ignore lint/suspicious/noExplicitAny:
export function encryptData(data: any) {
	const encrypted = CryptoJS.AES.encrypt(data, SECRET_KEY).toString();

	return encrypted;
}

export function decryptData(encrypted: string) {
	const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(
		CryptoJS.enc.Utf8,
	);
	return decrypted;
}
