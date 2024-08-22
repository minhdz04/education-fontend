import { JSEncrypt } from "jsencrypt";

export default class RsaUtil {
  static rsaClient = new JSEncrypt({
    default_key_size: "2048",
  });
  public static generateClientKeys() {
    return this.rsaClient;
  }
  public static encrypt(rsa: JSEncrypt, text: string) {
    return rsa.encrypt(text);
  }
  public static decrypt(rsa: JSEncrypt, text: string ) {
    return rsa.decrypt(text);
  }
}