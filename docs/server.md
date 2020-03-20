# The server

The server is the central point of coordinating the communication between your devices.

At the moment you will have to provide your own server and configure it with Wireguard.
You do not need a very powerful machine for a normal private network, a simple low-end VPS should be okay.

We recommend [Hetzner](https://www.hetzner.com/cloud) and are not affiliated with them. They just offer a good product!

If your network is very large you will probably know that it wont be enough in that case.

## Setup

To install Wireguard onto your server we recommend the [official documentation](https://www.wireguard.com/install/).

Also make sure that the port you choose for Wireguard is not blocked by your Firewall!.

## Configuring the server

After you have it installed Wireguard you can place the configuration file that you have created with **Wirt** into `/etc/wireguard` on your server.

If your server uses [systemd](https://systemd.io/) simply run `systemctl enable wg-quick@server` (server corresponds to `server.conf`, if you rename the file, you need to reflect this in the command as well). Your server is now successfully set up.

## Can we help you with this?

In the future we might be able to provide tools and services to do this quickly and fully automated.
More info will come along when we can be sure that everything works smoothly and is secure.
