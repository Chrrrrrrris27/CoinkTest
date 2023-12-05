import { enc, mode, pad, MD5, TripleDES } from "crypto-js";

export class Payload {
  private static KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiIwMzAxMDYiLCJWZXJzaW9uIjoiMS4wLjAifQ.OJ7pEEf3b0tPHwdWIn7-v18tYnMeYhTU9UT8zDSEtrg";
  private static readonly CONFIG = {
    mode: mode.ECB,
    padding: pad.Pkcs7,
  };

  constructor(private data: object) {}

  toJSON() {
    const payload = Payload.encrypt(this.data);
    return { payload };
  }

  static encrypt(data: object) {
    const stringData = JSON.stringify(data);
    const wordArray = enc.Utf8.parse(stringData);
    const key = Payload.genKey();
    const payload = TripleDES.encrypt(wordArray, key, Payload.CONFIG);
    return payload.ciphertext.toString(enc.Base64);
  }

  static decrypt<T = any>(data: string): T {
    const key = Payload.genKey();
    const wordArray = TripleDES.decrypt(data, key, Payload.CONFIG);
    const payload = wordArray.toString(enc.Utf8);
    try {
      return JSON.parse(payload);
    } catch {
      return payload as T;
    }
  }

  private static genKey() {
    let securityKeyArray = MD5(Payload.KEY).toString();
    return enc.Hex.parse(securityKeyArray);
  }
}