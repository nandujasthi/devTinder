## GitHub Copilot Chat

- Extension Version: 0.22.4 (prod)
- VS Code: vscode/1.95.3
- OS: Mac

## Network

User Settings:

```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: 20.207.73.85 (13 ms)
- DNS ipv6 Lookup: ::ffff:20.207.73.85 (17 ms)
- Electron Fetcher (configured): HTTP 200 (100 ms)
- Node Fetcher: HTTP 200 (101 ms)
- Helix Fetcher: HTTP 200 (172 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:

- DNS ipv4 Lookup: 140.82.113.22 (12 ms)
- DNS ipv6 Lookup: ::ffff:140.82.113.22 (13 ms)
- Electron Fetcher (configured): HTTP 200 (828 ms)
- Node Fetcher: HTTP 200 (766 ms)
- Helix Fetcher: HTTP 200 (799 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
