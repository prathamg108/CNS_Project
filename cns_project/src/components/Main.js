import React from "react";
import "./main.css";
const Main = () => {
  return (
    <div className="main-div">
      <header>
        <h1>Welcome to Web Page</h1>
      </header>
      <main>
        <div class="content">
          <h2>About Cryptography</h2>
          <p>
            Cryptography is the science and practice of secure communication and
            data protection in the presence of adversaries. It plays a
            fundamental role in information security and is used to ensure the
            confidentiality, integrity, authenticity, and non-repudiation of
            data. Here's an introduction to the key concepts of cryptography:
          </p>

          <p>
          <b>1. Confidentiality:</b> Cryptography ensures that sensitive information
            remains confidential. It involves encoding data in such a way that
            only authorized parties can decipher it. Encryption and decryption
            are the processes involved. Symmetric-key and asymmetric-key
            encryption are two common methods.
          </p>

          <p>
          <b>2. Integrity: </b>Cryptography verifies data integrity. It ensures that
            data has not been tampered with during transmission or storage. Hash
            functions, which generate fixed-size strings (hashes) from
            variable-size data, are used for integrity checking.
          </p>
          <p>
          <b> 3. Authentication: </b>Cryptography provides methods for verifying the
            identities of communicating parties. It ensures that you are indeed
            communicating with the party you think you are. Digital signatures
            and certificates are often used for authentication.
          </p>
          <p>
          <b>4. Non-repudiation:</b> Non-repudiation prevents parties from denying
            their involvement in a transaction. Digital signatures are commonly
            used to achieve non-repudiation. If someone has signed a document
            with their private key, they cannot later deny doing so.
          </p>

          <p>
          <b>5. Cryptographic Algorithms:</b> Cryptography relies on various
            algorithms and protocols, including: Symmetric Encryption: Both
            parties use the same key for encryption and decryption. Common
            algorithms include AES and DES. Asymmetric Encryption: Also known as
            public-key cryptography, it uses a pair of public and private keys.
            The public key is used for encryption, and the private key for
            decryption. RSA and ECC are well-known asymmetric algorithms. Hash
            Functions: These generate fixed-size outputs (hashes) from
            variable-size inputs. SHA-256 and MD5 are examples of commonly used
            hash functions. Cryptographic Protocols: These define a set of rules
            for secure communication. TLS/SSL is a widely used protocol for
            securing web traffic.
          </p>

          <p>
           <b>6. Key Management :</b> Effective key management is essential for secure
            cryptography. This includes key generation, distribution, storage,
            and rotation. Keys should be generated with secure random number
            generators and protected against unauthorized access.
          </p>

          <p>
            <b>7. Common Use Cases</b>: Cryptography is used in various scenarios,
            including: Data Encryption: Protecting data at rest and in transit
            by encrypting it with appropriate algorithms and keys. Digital
            Signatures: Verifying the authenticity of digital documents by
            signing them with a private key. Password Hashing: Storing passwords
            securely by hashing them with a salt to protect against rainbow
            table attacks. Secure Communication: Ensuring secure and private
            communication over the internet, such as through HTTPS. Cryptography
            is a vast and evolving field. Its primary goal is to provide
            security and privacy in the digital age, and it plays a crucial role
            in safeguarding sensitive information in various domains, from
            finance and healthcare to communications and e-commerce.
          </p>
        </div>
      </main>
      <footer>&copy; 2023 My Web Page</footer>
    </div>
  );
};

export default Main;
