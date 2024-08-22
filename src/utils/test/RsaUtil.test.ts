import RSAUtil from "../RsaUtil";
import { JSEncrypt } from "jsencrypt";

describe("RSAUtil", () => {
  const rsaServer = new JSEncrypt({});
  rsaServer.setPublicKey(
    "-----BEGIN PUBLIC KEY-----\
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApmoMcyvW1fzqtNy5Hzv0yABknGz8hu9UB4fajnBYUfTgpd8wTBeycrK6CYC1x/olbVlVzWdnwVNjw4ftS2tJt9v3Q0TKQaxeno2eZROOS84QIeO+JM2a1SwvNhZ2zTQNmAl7xamAsT9pgoPjxV9eL7ZrVhIG/0OyXBo7ubjs2m+6Bj9AKTEkNMAxvsVa4giC9hDPl5D6+DYnw5eBa2ZHXKyE70QkD/aH6c4XKWyKzO7wvKx3yBkQ+XUO3uK5lBIe567M1hsa+7cxbI/hUhhGPVN+OgM1QF3RJrx0GWUcZ/urSUWM4GOZMVDx36BnvWU+AVe5B8NR+XTgQc9PHNcEJQIDAQAB\
-----END PUBLIC KEY-----",
  );
  rsaServer.setPrivateKey(
    " \
-----BEGIN PRIVATE KEY-----\
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCmagxzK9bV/Oq03LkfO/TIAGScbPyG71QHh9qOcFhR9OCl3zBMF7JysroJgLXH+iVtWVXNZ2fBU2PDh+1La0m32/dDRMpBrF6ejZ5lE45LzhAh474kzZrVLC82FnbNNA2YCXvFqYCxP2mCg+PFX14vtmtWEgb/Q7JcGju5uOzab7oGP0ApMSQ0wDG+xVriCIL2EM+XkPr4NifDl4FrZkdcrITvRCQP9ofpzhcpbIrM7vC8rHfIGRD5dQ7e4rmUEh7nrszWGxr7tzFsj+FSGEY9U346AzVAXdEmvHQZZRxn+6tJRYzgY5kxUPHfoGe9ZT4BV7kHw1H5dOBBz08c1wQlAgMBAAECggEBAJjxjk+rUt+Iew2ObnVOXUITWmSJpe09uDTTnwKaLhHkxTKtVW4ZuV/A80oYiPkp5YwCNuF4z9rWETJ7kpNmH3JjL3Ubm+ePy8Zc0d6DgpwY3qrG7NJWRJ725M0JCFbAKF47GQ4pIqXEaewR2xxi8eVX+n44Q0YHqb0MPygJ1WVLHTgZRHMSQ94Tv7hsTXuunTbrqztd2UgniaSA48IA/mbnxitRlpa9riOTU431SSKKxBimrcY/AJ7R1huKApYlB/J2aHB7jknGNs6GH+B50BOOqIA24eU1OPRKkd35SfJURQxbnrZVVV7lYL642ChlLeCifPeayypxyjVD/HRfrwECgYEA4BAaBdJs3D4sUCDwibKzaWg/92dbcaUfqLWIEOnGu9kS/byAd4yo7TymLYHyrJZfdqKbld06Ol8J+mL4p3y8wqH9ewAwIctiO2o6iheOZeLr1AlxfI42yCyZhwCW10DgCjqNsOX8X6plhanU67c58xeJTuRyJ5vUDnGPT7q0tUkCgYEAviJjZeB6zr6/jI9lvfCdloVylQnrHt+Ly4q7/3AXkd9yTWp+kvEt02LbCcfO6RguIqsj3Lpud4sSsDCQ0uGLS6XBQRPReitQgRcwhgVrpXkdLvjGWO3lwmH/RBr37Dj3a3fH9o8tnB1MVFt/BOBWG7pfRdCo2DHqLQKus0kgA/0CgYAbLTjKzfwQNqZPTb9/JCKovVFM48duoFWXs/T+ACzvqeOozQ1T8samh72sNV/G2TJZBF4UrlGatN5T9V8tiW6nuNgy7BHqd23BwR+6kiLebsil3kNalTFF1EsG2eZx01eZRgLbmvmibNuFe9TshjvMJWWtIP5LmZX97n4wcHfsqQKBgQCPox8ASdO8+HFw2Kv+EBadLfdgDHwpeKv9erOHx8CmnO2W+orgq375IMdk3iO8CF5iJnQTPmxRtyjJHgdqqKU44uHaLgSkjLBmtYQc2191RMf9Qkdly2M1tB7J7q25MVgJQhY4d/X26FNPr0eIAYpLrEJpVbcYjKzikBI2s1mSaQKBgQCRMJFNZJg88/T1pGRKi67BDf471M+Asapi7AvHJm8fMuosiIx3cADzaYnlPESO7AcKctdbsL/Y7EMnLxjt4TKW88ioqalR3EjEoTXh0tD5IdW96fe9HmxI9XnZ7HENVvF+3TgOIhMN20Ganhmwo27L+h7FmCalp29CX9WaE9W2qg==\
-----END PRIVATE KEY-----",
  );
  it("should encrypt and decrypt a message correctly", () => {
    const originalMessage = "Test message";
    const encryptedMessage = RSAUtil.encrypt(rsaServer, originalMessage);
    console.log(encryptedMessage);
    const decryptedMessage = encryptedMessage
      ? RSAUtil.decrypt(rsaServer, encryptedMessage)
      : "";
    console.log(decryptedMessage);
    expect(decryptedMessage).toBe(originalMessage);
  });
});
