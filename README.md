# -Mr.-Manager-JWT-Exfiltration-Proof-of-Concept
Mr. Manager is a security research tool designed to demonstrate the inherent risks of Bearer token transport in the browser. This malicious extension PoC monitors outgoing HTTP traffic for the Authorization header, captures the associated JWT, and exfiltrates it to an external Out-of-Band (OOB) listener (Interactsh/Burp Collaborator).

# Technical Details
Interception: Uses the Chrome webRequest API to monitor outgoing Authorization headers.

Exfiltration: Implements Out-of-Band (OOB) data exfiltration using Interactsh and Burp Collaborator.

Manifest V3: Fully compliant with modern browser security standards using Service Workers.

# Security Impact
This project proves that Authorization logic is just as critical as Authentication. Even "unguessable" IDs and secure JWTs can be replayed if stored or transported insecurely.






# 🚀 Usage & Installation
This extension is designed for use in a controlled laboratory environment.

# 1. Preparation
Clone this repository to your local machine.

Open background.js and replace the following placeholders:

YOUR_INTERACTSH_ID -> Your unique OOB listener ID.

YOUR_COLLABORATOR_ID -> Your Burp Collaborator payload.

Ensure the target domain you are testing is listed in both manifest.json and background.js.

# 2. Loading the Extension
Open Google Chrome (or any Chromium-based browser) and navigate to chrome://extensions/.

Enable "Developer mode" via the toggle in the top-right corner.

Click the "Load unpacked" button.

Select the folder containing the project files.

# 3. Executing the PoC
Navigate to the target application and log in.

Observe your OOB listener (Interactsh or Burp).

Every time the application sends an authenticated request, the JWT will be intercepted and exfiltrated to your listener.

# ⚠️ Ethical Disclaimer
This tool is for educational and authorized security auditing purposes only. Unauthorized use of this tool against systems you do not have explicit permission to test is illegal and unethical.
