# How is it secure?

All communications between your devices and Wirt are encrypted, using public keys. This work is done by a tool called WireGuard(TODO: trademark).

It associates the IP of a device to a public key and any traffic to a device will be encrypted by that key.
This is true for all devices on the network. So everything is encrypted.
How everything works under the hood can be read here in [WireGuards Whitepaper](https://www.wireguard.com/papers/wireguard.pdf).

## How can I make sure that my Wirt Robot is safe

If you build one yourself you can follow some of our tips [here](link to security tips).

If you rent from us your Wirt will be secured the following way.

Based on the latest stable Debian version you get all of the security benefits of a correctly configured Linux server.

It only accepts traffic on 2 ports. Port 22 for maintenance and port 21212 for WireGuard traffic.

Everything else is blocked.

Read more about ports [here](TODO: link to port page)

## Endpoint security

Every single one of the open ports and the programs behind it uses encryption. SSH and WireGuard are both written with extreme thought put into them and embraced by the Linux community, for whom these topics are also their Job.
If they use it, it is probably secure!

## How about my devices and the services I put into the network

Eveything will be possible in your network! Based on the knowledge that communication is secure and you trust the devices in your network, you can do whatever you like, without worrying about someone else listening in or trying to hack you.
