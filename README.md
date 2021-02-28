LIF - Liberty, Independence, Freedom
====================================
https://lif.zone

## What is LIF?

A p2p Crypto Network For Creating Trust Between People. Yep, now it's all clear ;-)

LIF is an experimental open-source, decentralized, censorship-resistant protocol, that runs a p2p network, with mongo-like interface for accessing data stored in blockchains. We are trying to build a trusted stroage and publusing system.

This project will be evolutionary. We will follow [Hola's DNA](https://hola.org/dna). LIF eveolution will be incremental. Unlike other projects, which first developed the technology, and later on implemented the use cases (eg. bitcoin), we will first implement the API with a simple node/mongodb solution. Then move to mutiple servers with replications, and eventually we will implement it over p2p. This approach will let us create the best p2p protocol, one that fits real usage (and not vice versa where you try to force technology to real life application). A protocol that will be for the masses.

(For the technically minded, LIF is a keys/value distribued MongoDB-like database on top of IPFS-like file system, leveraging Bitcoin/Ethernium-like blockchain technology).

The cutting-edge browser-first blockchain approach, means that user can connect and use the network with just a browser. Making it native to the web. Anyone with a modren browser can connect and access the nework, without any need to install special appplication. LIF is blockchain technology for the masses. And we will first develop the applications around it, letting the UI, define the underline protocol (instead of vice versa...)

LIF combines [IPFS](https://raw.githubusercontent.com/ipfs/ipfs/) with [Mongo](https://github.com/mongodb/mongo), [Namecoin](https://www.namecoin.org/) and other blockchain design ideas, and enales you to create any distribueted database application:
- Easy to use by anyone. Even your parents :-)
- Data is never lost
- Data can always be found (and quickly)
- Data cannot be altered, changed or faked
- Date is owned and signed. Undipituable!

LIF is a **protocol**:
- Defines distributed database
- Cooridnates content delivery
- Provides blockchain network

LIF uses **crypto**:
- Private/public key signing
- Cryptographic-hash content indexing

LIF is **modular**:
- Works over any network protocol
- Torrent-like block excahnge
- Any application over the netwrok agree on it owns validity verification function

LIF is **p2p**:
- decentralized architecture
- peer to peer database
- no centeral server or point of failure

LIF is a **CDN**:
- Publish any data to the network
- Smart caching via hasing
- Torrent-like system

LIF enables **SSI**;
- You can prove that your are you!
- Generat your own SSI (Self-sovereign identity)

LIF has **DNS**:
- Namecoin-like DNS
- Global name space that is not controlled by any root server

## LIF's Mission & Vission
Liberty, Independence, Freedom!
This project came to life following the operssion all over the word during the Corona, and the facists measures used by almost all governments. All with the excuse to "protect" us...
LIF is our way to fight back! Taking back the rights that belong to us, by creating a network that no government or big cooperation can control, shut down or censore.

## Design principles
As soon as there was digital data, there was a need to store it. File systems was the first bug jump in handlig big perstient data. Once you had data, you needed to a way to access itefficiently and remotly. SQL-based databases was another big jump forward.
But SQL truned out to be slow and limitting. When your schema is hard coded in the table, it makes the system slow, complex and unfexible. It's very hard to fix stuff over time and you are stuck with obsolete system. 
So MongoDB evolved. Where there is no static schema. You can throw in any data in any format, and it is up to the application to decide in run time how to "look" at the data.
LIF is a similar approach to access and manipulate IPFS/blockchains.
In LIF, anyone can throw any data to the network, no validation is done at the insertion point. Data is validated only when it actually used, and it is up to the data consumer to verify and validate the data. This approach to blockchain, completely changes the game. With current technology, any transcation, or chage to the blockcahin is slow and expensive (and get more expensive over time with the inflation of the currency. You need to pay increasing amouns of mining fees). With LIF, any transcation is super fast and without cost. We deffer the validation to the moment where data is actually used, and it is up the to the data consumer to validate it. 
For each data-type used in LIF, there is a verfiy function, that is agreed by all, on the way to check if data si legit. Each application in LIF, can define any type of verify function. This flexibiity enables using LIF for almost any application and the protocol can evolve over time.

The key principlas:
- Evolution (follow [Hola's DNA](https://hola.org/dna)
- Designed for the masses (ease of use & fast)
- Accessible with a browser
- Anyone can push any data to the network
- Data is never lost
- Data is verifyed when used (not at inseretion point)
- There is a HUGE incentives for the participants to know the most accurate status of the data

## Use cases

- **Social Apps:** If you ever used Facebook, you know how annoying, misleading and wrong are the Fact-checkers (Ugh!). Imagine that Facebook data was saved on LIF and anyone could have developed a Facebook-reader application to show the data. A few users would like to have today's censored (fact-checkers) kind of application. Parents may decide to have an app to hide adult content, while free pepole will choose one that doesn't censoer. Up to you. Remeber Parler that was brought down and all data was erased - It coud never happen with LIF!
- **Crypto currency:** Today, your money is not realy yours (if you could really call FIAT money "money"...). What if you could use a currency which is not fake (like all government money). What if you could issue your own money? What if no one could "steal" your money. With LIF, it is possible!
- **Voting system:** Do you trust "Big Brother" votings? Have you ever waching a TV show where the audience votes, and you were sure the the production faked the votes? Are you sure your country voting is legit? Some in the US aren't.... A voting system leverging on the LIF protocaol CAN be trusted by all!
- **DNS:** Today, it's very easy to block and censore any site. In fact, all the countries in the world are doing it all the time. With LIF, you can create a site that can never be taken down.
- **Online Passport:**
- Any any application that rely on trust between 2 pepole or more

## Current state of LIF

LIF is at the **VERY** early stage of conception. We are just starting up. We are still defining the main parts
of the network, how it will work and the API. We plan to come up with initial POC in a few weeks.

## License

**LIF License** - Why do you beeieve you need one?! Liberty, Independence, Freedom!
If you want to modify - no problem!

## Get involved

We are just starting up, and you are invited to join!

## Related technologies:
LIF is based on **AMAZING*** ideas from many open source projects. To name a few:
- [IPFS](https://raw.githubusercontent.com/ipfs/ipfs/)
- [MongoDB](https://github.com/mongodb/)
- [Namecoin](https://www.namecoin.org/)
- [Ethernium](https://github.com/ethereum)
- [BitCoin](https://github.com/bitcoin)
- [MongoDB](https://github.com/mongodb/)
- [GIT](https://github.com/git)

## Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install docker-compose and docker:

```
// install docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

// re-login to your user and verify you can run docker command without sudo
docker run hello-world

// install docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Running DB server

```
$ docker-compose up -d server_dev
```

The DB server will be running at [http://localhost:3101](http://localhost:3101).

Verify it works via a simple client script:

```
$ node pkg/example_client.js
```

You should see output like:


```
NOTICE: publish_passport: success
NOTICE: validate_passport: success
```

### Running website

```
$ docker-compose up -d www_dev
```

The site will be running at [http://localhost:3100](http://localhost:3100).

## Development Process

SOON...

## Learn how LIF works

SOON...

## API

SOON...

## FAQ

SOON...

