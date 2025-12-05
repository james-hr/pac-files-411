function FindProxyForURL(url, host) {
    // Define the list of proxy servers and ports
    var proxyServers = [
        "PROXY 136.179.19.164:3128", // from proxy.pac and proxy-us.pac
        "PROXY 136.179.19.165:4128", // from proxy-us-backup.pac
        "PROXY 212.50.20.18:7028"    // from proxy-bg.pac
    ];
    
    // Define the list of wildcards for which the proxy should be used
    var wildcards = [
        "*411locals*",
        "*411reports*",
        "*50-first-dates.411reports.com*",
        "*10.0.32.12*",
        "212.50.20.20*",
        "*10.0.32.22*",
	"*speedtest.net*",
	"*icanhazip.com*",
        "*bitrix.info*",
        "*twilio.com*",
        "*sendgrid.com*"

    ];
    
    // Check if the host matches any of the wildcards
    for (var i = 0; i < wildcards.length; i++) {
        if (shExpMatch(host, wildcards[i])) {
            for (var j = 0; j < proxyServers.length; j++) {
                return proxyServers[j];
            }
        }
    }
    
    // If no match, bypass the proxy
    return "DIRECT";
}
