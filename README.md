# 411Locals Proxy Web Extension Files

This repository contains Proxy Auto-Configuration (PAC) files for the [411Locals Proxy](https://github.com/smihov/chrome-extension) service. These PAC files enable automatic proxy configuration for accessing 411Locals services and related resources. This repo is connected to Cloudflare Pages, which are running the latest commited version from Github. 

All changes to this repo result in changes to the actual files used by the proxy extension in approximately 2 minutes after the latest commit. 

## Files

- `proxy-us.pac` - US-specific proxy configuration
- `proxy-us-backup.pac` - Backup US proxy configuration
- `proxy-bg.pac` - Bulgaria-specific proxy configuration

## Usage

These PAC files are used by the 411Locals web extension to automatically route specific web traffic through appropriate proxy servers, allowing secure access to internal 411Locals services and resources.

The proxy configurations target specific domains and IP addresses, including:
- 411locals domains
- 411reports domains
- Internal IP addresses
- Various service providers used by 411Locals (Twilio, SendGrid, etc.)

## Deployment

Add/Remove whitelisted sites that need to be routed
Save
```
git add -A 
git commit -m "reason for commit"
git push
```

Wait approximately 2 minutes for the changes to be pushed to Cloudflare (411locals-extension.pages.dev)

## Development

When updating proxy configurations, ensure that:
1. The correct proxy server addresses are specified
2. All required domains and IP patterns are included in the wildcards list
3. Changes are tested before deployment

## Privacy

For information about data handling and privacy, refer to the [Privacy Policy](https://411locals-extension.pages.dev/privacy-policy). 