import { EVMWallet } from "./evm";
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';

export class MetamaskWallet extends EVMWallet<MetaMaskConnector> {
  getUrl(): string {
    return 'https://metamask.io';
  }

  getName(): string {
    return 'Metamask';
  }

  protected createConnector(): MetaMaskConnector {
    return new MetaMaskConnector({
      chains: this.chains
    });
  }

  getIcon(): string {
    // https://github.com/MetaMask/brand-resources/blob/c3c894bb8c460a2e9f47c07f6ef32e234190a7aa/SVG/metamask-fox.svg
    return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOmV2PSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL3htbC1ldmVudHMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzE4LjYgMzE4LjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxOC42IDMxOC42OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0UyNzYxQjtzdHJva2U6I0UyNzYxQjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0MXtmaWxsOiNFNDc2MUI7c3Ryb2tlOiNFNDc2MUI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDJ7ZmlsbDojRDdDMUIzO3N0cm9rZTojRDdDMUIzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Qze2ZpbGw6IzIzMzQ0NztzdHJva2U6IzIzMzQ0NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0NHtmaWxsOiNDRDYxMTY7c3Ryb2tlOiNDRDYxMTY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDV7ZmlsbDojRTQ3NTFGO3N0cm9rZTojRTQ3NTFGO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Q2e2ZpbGw6I0Y2ODUxQjtzdHJva2U6I0Y2ODUxQjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0N3tmaWxsOiNDMEFEOUU7c3Ryb2tlOiNDMEFEOUU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDh7ZmlsbDojMTYxNjE2O3N0cm9rZTojMTYxNjE2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Q5e2ZpbGw6Izc2M0QxNjtzdHJva2U6Izc2M0QxNjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQo8L3N0eWxlPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjI3NC4xLDM1LjUgMTc0LjYsMTA5LjQgMTkzLDY1LjggIi8+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI0NC40LDM1LjUgMTQzLjEsMTEwLjEgMTI1LjYsNjUuOCAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIzOC4zLDIwNi44IDIxMS44LDI0Ny40IDI2OC41LDI2MyAyODQuOCwyMDcuNyAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMzLjksMjA3LjcgNTAuMSwyNjMgMTA2LjgsMjQ3LjQgODAuMywyMDYuOCAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjEwMy42LDEzOC4yIDg3LjgsMTYyLjEgMTQ0LjEsMTY0LjYgMTQyLjEsMTA0LjEgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMTQuOSwxMzguMiAxNzUuOSwxMDMuNCAxNzQuNiwxNjQuNiAyMzAuOCwxNjIuMSAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjEwNi44LDI0Ny40IDE0MC42LDIzMC45IDExMS40LDIwOC4xICAiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTc3LjksMjMwLjkgMjExLjgsMjQ3LjQgMjA3LjEsMjA4LjEgICIvPgo8L2c+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIyMTEuOCwyNDcuNCAxNzcuOSwyMzAuOSAxODAuNiwyNTMgMTgwLjMsMjYyLjMgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIxMDYuOCwyNDcuNCAxMzguMywyNjIuMyAxMzguMSwyNTMgMTQwLjYsMjMwLjkgICIvPgo8L2c+Cjxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iMTM4LjgsMTkzLjUgMTEwLjYsMTg1LjIgMTMwLjUsMTc2LjEgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iMTc5LjcsMTkzLjUgMTg4LDE3Ni4xIDIwOCwxODUuMiAiLz4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjEwNi44LDI0Ny40IDExMS42LDIwNi44IDgwLjMsMjA3LjcgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIyMDcsMjA2LjggMjExLjgsMjQ3LjQgMjM4LjMsMjA3LjcgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIyMzAuOCwxNjIuMSAxNzQuNiwxNjQuNiAxNzkuOCwxOTMuNSAxODguMSwxNzYuMSAyMDguMSwxODUuMiAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjExMC42LDE4NS4yIDEzMC42LDE3Ni4xIDEzOC44LDE5My41IDE0NC4xLDE2NC42IDg3LjgsMTYyLjEgICIvPgo8L2c+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSI4Ny44LDE2Mi4xIDExMS40LDIwOC4xIDExMC42LDE4NS4yICAiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMjA4LjEsMTg1LjIgMjA3LjEsMjA4LjEgMjMwLjgsMTYyLjEgICIvPgoJPHBvbHlnb24gY2xhc3M9InN0NSIgcG9pbnRzPSIxNDQuMSwxNjQuNiAxMzguOCwxOTMuNSAxNDUuNCwyMjcuNiAxNDYuOSwxODIuNyAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3Q1IiBwb2ludHM9IjE3NC42LDE2NC42IDE3MS45LDE4Mi42IDE3My4xLDIyNy42IDE3OS44LDE5My41ICAiLz4KPC9nPgo8cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjE3OS44LDE5My41IDE3My4xLDIyNy42IDE3Ny45LDIzMC45IDIwNy4xLDIwOC4xIDIwOC4xLDE4NS4yICIvPgo8cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjExMC42LDE4NS4yIDExMS40LDIwOC4xIDE0MC42LDIzMC45IDE0NS40LDIyNy42IDEzOC44LDE5My41ICIvPgo8cG9seWdvbiBjbGFzcz0ic3Q3IiBwb2ludHM9IjE4MC4zLDI2Mi4zIDE4MC42LDI1MyAxNzguMSwyNTAuOCAxNDAuNCwyNTAuOCAxMzguMSwyNTMgMTM4LjMsMjYyLjMgMTA2LjgsMjQ3LjQgMTE3LjgsMjU2LjQgICAxNDAuMSwyNzEuOSAxNzguNCwyNzEuOSAyMDAuOCwyNTYuNCAyMTEuOCwyNDcuNCAiLz4KPHBvbHlnb24gY2xhc3M9InN0OCIgcG9pbnRzPSIxNzcuOSwyMzAuOSAxNzMuMSwyMjcuNiAxNDUuNCwyMjcuNiAxNDAuNiwyMzAuOSAxMzguMSwyNTMgMTQwLjQsMjUwLjggMTc4LjEsMjUwLjggMTgwLjYsMjUzICIvPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDkiIHBvaW50cz0iMjc4LjMsMTE0LjIgMjg2LjgsNzMuNCAyNzQuMSwzNS41IDE3Ny45LDEwNi45IDIxNC45LDEzOC4yIDI2Ny4yLDE1My41IDI3OC44LDE0MCAyNzMuOCwxMzYuNCAgICAyODEuOCwxMjkuMSAyNzUuNiwxMjQuMyAyODMuNiwxMTguMiAgIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3Q5IiBwb2ludHM9IjMxLjgsNzMuNCA0MC4zLDExNC4yIDM0LjksMTE4LjIgNDIuOSwxMjQuMyAzNi44LDEyOS4xIDQ0LjgsMTM2LjQgMzkuOCwxNDAgNTEuMywxNTMuNSAxMDMuNiwxMzguMiAgICAxNDAuNiwxMDYuOSA0NC40LDM1LjUgICIvPgo8L2c+Cjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iMjY3LjIsMTUzLjUgMjE0LjksMTM4LjIgMjMwLjgsMTYyLjEgMjA3LjEsMjA4LjEgMjM4LjMsMjA3LjcgMjg0LjgsMjA3LjcgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iMTAzLjYsMTM4LjIgNTEuMywxNTMuNSAzMy45LDIwNy43IDgwLjMsMjA3LjcgMTExLjQsMjA4LjEgODcuOCwxNjIuMSAiLz4KPHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIxNzQuNiwxNjQuNiAxNzcuOSwxMDYuOSAxOTMuMSw2NS44IDEyNS42LDY1LjggMTQwLjYsMTA2LjkgMTQ0LjEsMTY0LjYgMTQ1LjMsMTgyLjggMTQ1LjQsMjI3LjYgICAxNzMuMSwyMjcuNiAxNzMuMywxODIuOCAiLz4KPC9zdmc+";
  }
}