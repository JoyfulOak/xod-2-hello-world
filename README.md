# Example plugin

This example shows the XOD 2 plugin API v1. Package `xod-plugin.json` and the self-contained JavaScript bundle at `dist/plugin.js` into `xod-plugin.zip`. The ZIP must also contain the manifest at its root (or one enclosing directory).

The command calls `ui.notify`, which the user must approve through the manifest permission list. The panel renders inside its own sandboxed frame. The theme example uses a limited set of visual CSS properties; network URLs, at-rules, and external resources are rejected.

To publish, put the manifest and source in a public GitHub repository, create a GitHub Release with the matching version tag, attach `xod-plugin.zip`, then submit that repository from XOD 2's Plugins manager.
