# Beginner explanation

**Wirt** is a tool to create safe and private networks for all your devices.
Under the hood all of this is made possible with software called [WireGuard®](https://www.wireguard.com/), which **Wirt** is trying to make easier to use.

For you as a beginner to understand what is going on we thought it might be good to leave the technical world for a bit and instead use a metaphor.

## Containers and trains

Lets say that you are the mayor of a city and want to send some goods to one of your partner cities.
Unfortunately there is no direct connection by rail and in addition to that, loads of people are up and about to take your goods away while they are on the road!

So what is the option you can use?
Well, in this case you decide to take the services of the capital of your country which has routes to all other cities! So you send off the train with the containers and once they reach the capital, the workers there will make sure that it gets routed to your partner city.

### How are my goods safe?

So what about all those people trying to take your goods away?

This one is easy to solve since the mayor of your partner city gave you the blueprints for a special lock that only he has the key for!

Simply lock the container with it and all the goods will arrive safely in your partner city.

## Back to the tech land

So what does this mean in actual technology?

The cities are your devices and the containers are things called [_packets_](https://en.wikipedia.org/wiki/Network_packet), which enable your devices to communicate via networks such as the internet.
And who is the capital? That is your WireGuard® server. It keeps track of the correct routes to your devices to make sure that they will always be able to communicate with each other.
But where do the locks and keys come from?
This is something that **Wirt** provides you with. When you create devices in the Tutorial or on the quickform, **Wirt** will automatically generate the lock and the key, and distribute them, so that your devices can communicate safely with each other.

## More information

This is a simplified example, and some things might work slightly different under the hood, for example the key exchange always happens over the server. Instead of each device knowing the keys of all other servers.

To read more about **Wirt** itself head to the expert explanation, which will hopefully answer all your questions.

If your question is not answered feel free to open an issue at https://github.com/wirtnetwork/docs/issues, and somebody will surely help you out!
