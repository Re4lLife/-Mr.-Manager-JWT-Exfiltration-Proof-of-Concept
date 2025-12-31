# -Mr.-Manager-JWT-Exfiltration-Proof-of-Concept
Mr. Manager is a security research tool designed to demonstrate the inherent risks of Bearer token transport in the browser. This malicious extension PoC monitors outgoing HTTP traffic for the Authorization header, captures the associated JWT, and exfiltrates it to an external Out-of-Band (OOB) listener (Interactsh/Burp Collaborator).
