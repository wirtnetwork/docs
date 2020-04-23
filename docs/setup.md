# Setup

## Wirt Bot

If you want to run your own Wirt Bot you will need the following things:

- A machine with a public IP on the internet
- Root access on this machine
- WireGuard® already installed
- A valid SSL certificate for your machine
- Port 3030 opened in your firewall
- Your system is managed with [systemd](https://en.wikipedia.org/wiki/Systemd)
- Your WireGuard configuration should be at `/etc/wireguard/server.conf`. If you deviate from this, you have to change this in the `wireguard-restarter` and add the `CONFIG_PATH` environment variable to your `wirt-adater` service.

Having these things is the first **80%** of finishing your Wirt Bot and you should find plenty of documentation about these things on the internet.

If you come across a good one, or have vast knowledge about these topics, contributions to this documentation is highly encouraged!

But what about the last **20%**?

Finishing up the setup requires the [Wirt adapter](https://github.com/wirtnetwork/adapter/) to be running on your machine.

This can be achieved with the following steps:

- Download a release from https://github.com/wirtnetwork/adapter/releases and place it into `/usr/bin/wirt-adapter`
- Get the public key of your Wirt interface from the [settings section](https://wirt.network/dashboard) on the Dashboard
- Copy https://github.com/wirtnetwork/adapter/blob/master/wirt-adapter.service to `/etc/system/systemd/wirt-adapter.service`
  - **Make sure to change the variables in that file**!
  - PUBLIC_KEY: this is the public key from the Wirt interface
  - SSL_PEM_CERT: this is the location of your SSL certificate
  - SSL_KEY: this needs the location to your SSL key
  - User and Group: choose the user and the group that is used to run the `wirt-adapter` or delete these lines to use the root user.
  - You can leave the port and host setting at the default, unless you really know what you are doing
- When configured correctly you can now run `systemctl enable --now wirt-adapter` to start the adapter. Use `journalctl -xe` if something is going wrong to get more information on what happened
- The last step to finish up the setup is the activation of a reloader. Copy https://github.com/wirtnetwork/adapter/blob/master/wireguard-restarter.sh to `/usr/bin/wireguard-restarter.sh`
- Now copy https://github.com/wirtnetwork/adapter/blob/master/wireguard-restarter.service to `/etc/systemd/system/wireguard-restarter.service`
- Run `systemctl enable --now wireguard-restarted`

### Testing your setup

To verify that everything is running correctly you can now add your hostname for which your SSL certificate is valid to your server on the [Dashboard](https://wirt.network/dashboard).

Now add a new mobile device, scan the presented QR code with your WireGuard app and verify that you can reach other devices on your network.

For verification you can always try to ping the Wirt Bot. Its IP in the network is always `SUBNET` + 1. With the default settings this is `10.10.0.1`

## Wirt Interface

Nothing to do here.32
By reaching the website your setup is done. If you have set up the Wirt Bot it should already be connected and you are ready to go.
