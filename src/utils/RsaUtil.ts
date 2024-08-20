import * as forge from 'node-forge';

interface KeyPair {
  publicKey: string;
  privateKey: string;
}

class RSAUtil {
  private static generateKeyPair(bits: number): Promise<forge.pki.KeyPair> {
    return new Promise((resolve, reject) => {
      forge.pki.rsa.generateKeyPair({ bits, e: 0x10001 }, (err, keypair) => {
        if (err) {
          reject(err);
        } else {
          resolve(keypair);
        }
      });
    });
  }

  public static async generateKeys(bits: number = 2048): Promise<KeyPair> {
    const keypair = await RSAUtil.generateKeyPair(bits);
    return {
      publicKey: forge.pki.publicKeyToPem(keypair.publicKey),
      privateKey: forge.pki.privateKeyToPem(keypair.privateKey),
    };
  }

  public static encrypt(publicKeyPem: string, message: string): string {
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    return forge.util.encode64(publicKey.encrypt(message, 'RSA-OAEP'));
  }

  public static decrypt(privateKeyPem: string, encryptedMessage: string): string {
    const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
    const encryptedBytes = forge.util.decode64(encryptedMessage);
    return privateKey.decrypt(encryptedBytes, 'RSA-OAEP');
  }
}

export default RSAUtil;