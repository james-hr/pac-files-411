function FindProxyForURL(url, host) {
    // Define the proxy server and port
    var proxyServer = "PROXY 136.179.19.165:4128";
    
    // Define the list of wildcards for which the proxy should be used
    var wildcards = [
        "*411locals*",
        "*411reports*",
        "*50-first-dates.411reports.com*",
        "*10.0.32.12*",
        "212.50.20.20*",
        "*10.0.32.22*",
	    "*beta.speedtest.net*",
	    "*icanhazip.com*",
        "*twilio.com*",
		"*.nm.gov*",
		"*.securedach.com*",
		"*52.53.189.62*",
        "*sendgrid.com*"

    ];
    
    // Check if the host matches any of the wildcards
    for (var i = 0; i < wildcards.length; i++) {
        if (shExpMatch(host, wildcards[i])) {
            return proxyServer;
        }
    }
    
    // If no match, bypass the proxy
    return "DIRECT";
}
