# ReserveRoute — fixtures

Open-source planning for Stellar sponsored-reserve transfers and removals. The first adapter supports credit trustlines, with explicit blockers and unsigned transaction preparation.

Run npm test and npm run demo. scenarios.json covers blocked removal, exact reserve boundary, transfer preserving beneficiary sponsorship and paying fees before reserve release. All these regression scenarios are synthetic.

Read [INTEGRATION.md](INTEGRATION.md) for the connected setup, trust boundaries and supported scope. Components: [engine](https://github.com/reserveroute/reserveroute-engine), [backend](https://github.com/reserveroute/reserveroute-backend), [frontend](https://github.com/reserveroute/reserveroute-frontend), [cli](https://github.com/reserveroute/reserveroute-cli), [fixtures](https://github.com/reserveroute/reserveroute-fixtures).

MIT licensed. Local testnet MVP, not a complete sponsorship inventory or production signing service.
