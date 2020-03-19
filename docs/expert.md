# Expert explanation

**Wirt** is a simple UI to configure your Wireguard network. Its as simple as that.
Setting it up manually was annoying so this project was something within my abilities.
But building a Web based UI for a tool that focusses on security might raise some eyebrows so some extra care went into designing it.

## So how can it be safe?

**Wirt** is a webapp that runs completely in your browser. No data is being send to any API or fetched from them. Even key generation happens right in your browser using rust code based on the official [wireguard-rust]() implementation that is complied to [WebAssembly](https://webassembly.org/).

Nobody except you has access to the keys.
