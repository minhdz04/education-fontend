import RSAUtil from "../RsaUtil";

describe("RSAUtil", () => {
  let keys: { publicKey: string; privateKey: string };

  beforeAll(async () => {
    keys = await RSAUtil.generateKeys();
  });

  it("should generate a valid RSA key pair", async () => {
    const keys = await RSAUtil.generateKeys();
    expect(keys.publicKey).toBeDefined();
    expect(keys.privateKey).toBeDefined();
    expect(keys.publicKey).toContain("-----BEGIN PUBLIC KEY-----");
    expect(keys.privateKey).toContain("-----BEGIN RSA PRIVATE KEY-----");
  });

  it("should encrypt a message with the public key", () => {
    const message = "Hello, RSA!";
    const encryptedMessage = RSAUtil.encrypt(keys.publicKey, message);
    expect(encryptedMessage).toBeDefined();
    expect(encryptedMessage).not.toBe(message);
  });

  it("should decrypt a message with the private key", () => {
    const message = "Hello, RSA!";
    const encryptedMessage = RSAUtil.encrypt(keys.publicKey, message);
    const decryptedMessage = RSAUtil.decrypt(keys.privateKey, encryptedMessage);
    expect(decryptedMessage).toBe(message);
  });

  it("should encrypt and decrypt a message correctly", () => {
    const originalMessage = "Test message";
    const encryptedMessage = RSAUtil.encrypt(keys.publicKey, originalMessage);
    const decryptedMessage = RSAUtil.decrypt(keys.privateKey, encryptedMessage);
    expect(decryptedMessage).toBe(originalMessage);
  });
});
