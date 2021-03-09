LIF - Liberty, Independence, Freedom
====================================
https://lif.zone

## About this document
This is an abstract description of LIF and vision. It is not necessarily how it will be implemented. It's an attempt to logically visualize the LIF evolution, or how to conceptually look at LIF network.
And it will change. LIF is just in the early stages and we keep improving the idea all the time. The main principle is that it is the responsibility of the one who is using the data, to verify and trust it. Anyone can submit to LIF without verification (besides trivial ones, eg check that JSON is properly signed)

## LIF's Mission & Vission
Liberty, Independence, Freedom!
This project came to life following the operssion all over the word during the Corona, and the facists measures used by almost all governments. All with the excuse to "protect" us...
LIF is our way to fight back! Taking back the rights that belong to us, by creating a network that no government or big cooperation can control, shut down or censore.

## What is LIF?
A p2p Crypto Network For Creating Trust Between People. Yep, now it's all clear ;-)

LIF is an experimental open-source, decentralized, censorship-resistant protocol, that runs a p2p network, with mongo-like interface for accessing data stored in blockchains. We are trying to build a trusted stroage and publusing system.

(For the technically minded, LIF is a keys/value distribued MongoDB-like database on top of IPFS-like file system, leveraging Bitcoin/Ethernium-like blockchain technology).

This project will be evolutionary. We will follow [Hola's DNA](https://hola.org/dna). LIF eveolution will be incremental. Unlike other projects, which first developed the technology, and later on implemented the use cases (eg. bitcoin), we will first implement the API with a simple node/mongodb solution. Then move to mutiple servers with replications, and eventually we will implement it over p2p. This approach will let us create the best p2p protocol, one that fits real usage (and not vice versa where you try to force technology to real life application). A protocol that will be for the masses.

The cutting-edge browser-first approach, means that user can connect and use the network with just a browser. Making it native to the web. Anyone with a modren browser can connect and access the network, without any need to install special appplication. LIF is blockchain technology for the masses. And we will first develop the applications around it, letting the UI, define the underline protocol (instead of vice versa...)

Main principles:
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

## Trust in real life:
- you go to the store and want to buy a shirt for $20. You pay the owner with a $20 US bill.
- it's the store responsibility to trust the bill. He may say, I don't trust it and refuse to get paid. But in that case, he lost a customer and the sale
  So HE has a BIG incentive to verify and trust the bill - this is exactly the situation in LIF.
- So if you pay with $20, most likely he will just quickly look at the bill. But if you pay with $100, there is more chance he will use a special device to verify the bill legit. 
- In fact, most faked bills are detected by business or banks. It is very rare for individuals to look for fake bills (at most they will look at it in the light or touch it). And if a business gets bills from an ATM, he will probably not verify them (he trust the bank). 
-  LIF is similar. For a small transaction, you will just do some minimal validation. For important transactions, you will put more effort into verifying it. If you trust the paying entity, you will not check it too much. If you don’t, you will put effort to make sure it is legit. Up to you, to decide how much you trust LIF and how much effort you want to put into validation.
- Money is essentially trust between people.
- And today’s money is used by governments to control you. You must trust them, otherwise your money doesn’t worth anything. This is what governments focus on. Finding more and more ways to control you (marriage, divorce, how to raise your kids,...)

## How to lift a car with a fin-hair cotton fiber?
If you wanted to lift a car with a crane, you could attach it with a heavy-duty iron chain. You will need a big, heavy chain.
If you try instead to use a cotton hair-fin fiber to lift the car, the fiber will snap.
Even if you connect thousands of fibers together and try to lift a car, it will snap. Because the force on the fibers is not evenly distributed. The shortest fiber will be supporting a much higher proportion of the total load and will snap. And then in a cascading effect, all  the rest of the fibers will snap. One after the other. No matter how hard you try, no two fibers will be of the same length.
And it is VERY hard to handle SO MANY hair-fin fibers, which renders it effectively useless.
But when you twist fibers together, magic! The twisting not only keeps the fibers together, but enables the load to be evenly distributed. And you get a VERY strong rope from very delicate cotton fibers. Magic!
And you can twist again! And Again! Bigger ropes are made from twisting cotton fibers into small yarns, then taking a few of them, and twisting them again to create a rope. And you can take a few of those ropes and twist again to create a bigger rope. This way you can repeat and create rope of any length and strength.
So twisting a hair-fin delicate fiber can create a powerful rope that is strong and easy to handle. Furthermore, you gain damage resilience. Even if many fibers of the rope are damaged or snap, the rope will still function and keep its total strength. It’s amazing how much damage a rope can sustain over time before it snaps. Yep, you never thought about it, but a simple rope is quite an amazing technology achievement.
So you could replace a heavy chain, with a cotton twisted rope to lift a car. It will be a much lighter rope compared to the needed heavy-duty iron-made chain.
How strong a rope can be? Well, they even use it for building cable-stayed bridges.
And cable-stayed bridges evolved from the historical chain bridges.
Blockchain is similar. It’s the historical analogy of chain bridges. Blockchain is the first attempt to create distributed secured blocks of information. It works, but it’s cumbersome, slow, expensive and inflexible.
So LIF, is an attempt to twist small data fibers into all mighty interlocking ropes of data.
When a link in a chain breaks, the whole chain collapses. So you must put a huge amount of effort into creating super-strong links. And the longer the cable, it becomes exceptionally more difficult. But with LIF, even if some data is lost, the system can overcome it and confirm if a blockchain is valid.

## How to “twist” data?
Each peer writes signed sequential JSONs to a block. When the block is full, the peer close it and starts a new block. This creates a personal blockchain.
When the peer closes a block, he sends to another peer a signed JSON that contains the HASH of the last block (the one he closed). That tiny JSON is inserted into the peer’s current open block. The peer as well sends from time to time, a signed JSON with the HASH of this last (closed) block.
This process of peers saving signed HASH of their last block on another peer, is called “twisting data”. It’s not duplication of data, we just send a tiny HASH. But it is enough to guarantee that no party will “cheat” and insert information with a fake timestamp or alter a closed block. If a peer fakes a block, it will not match the signed HASH that the other peer saved in his block. Any attempt to “cheat” will be detected and that peer will not be trusted.
This data “twisting” is just a proof for the existence of such blocks in a specific time frame (it is not the block data itself).
This way, it is possible to map changes to data between different peers by traversing all the chain of blocks and decide the order of the transactions (if someone fakes a transaction, the HASH will not match and you will detect it)
In most cases, it will be possible to determine the order of transactions. For the cases there will be a conflict, the conflict resolution algorithm (CRA) will be used to decide.
Data “twisting” doesn’t occur only between two peers, but all over the network. Each peer “twists” it’s signed blocks with multiple other peers, which in turn “twist” with others. This mutl “twisting” across the network, effectively creates a blockchain (a block that no one can alter and all agree it is correctness, ie, network consensus is achieved!) .
This is similar to how a rope is constructed from twisting fibers. Each fiber by itself is weak, but twisting them together, creates a structure stronger than iron chains! So instead of twisting fibers, LIF “twists” data.

## How is LIF distributed / duplicated  across peers?
We use the “you scratch my back and I'll scratch yours” method for P2P data distribution
A peer keeps a ledger of signed JSONs. It is just a sequential list of JSONs signed by the peer private key and stored in an internal database. Each JSON includes a timestamp.
The signed JSONs are kept inside blocks (eg. each block contains 1MB of information). When a block is full, the peer will close it and open a new block.
For example, the ledger may contain a list of all your bank transactions. This is important information, and you want to have a backup.
To backup you data, you want to duplicate (distribute) and save a copy on another peer.
So you contact a near-by peer (the problem of finding a peer in a P2P network was already solved by many other P2P protocols and is explained later on). For now, we assume we found another peer.
The problem now is how to “convince” the other peer, to waste storage and keep a copy for you. Easy. You offer the other peer to save his data on your storage. So if you save 5MB of data on another peer, in exchange, you will store 5MB of data on your storage. A classical “you scratch my back and I'll scratch yours” case.
If the data is important for you, you will store it in multiple peers.
The other party might not be honest and may decide to delete the data without letting you know. The solution is to periodically “ask” the other peer some questions that will prove that he has a copy (ie, ask him to run some calculation on the data to prove he has it, like calculate checksum with a specific algorithm). If at some point you find out that the peer didn’t keep a copy of your data, you simply delete his data. The other peer might be honest, but unreliable. He might be offline for long periods of time so you decide to delete his data and find another peer.
You may want your data to be kept in more places, you can periodically check how many copies exist, and if needed, ask more peers to keep copies.
Some peers might specialize and be interested in keeping only a specific kind of data. A bank might only be willing to keep financial transactions, while another might only be willing to keep video-related stuff. Those specialized (and bigger) peers will be called notary, and they store information for many peers, which in turn may store their data in bigger notaries.
Probably over time, the bigger notaries will only communicate directly with other big notaries and will not accept saving data of individuals. But because you will be saving your data to medium size notaries, and they use a bigger one, your data will eventually be copied to other places (if you keep personal todo list, there will not be that many copies, but if you keep monetary transactions, there will be MANY parties that will want to have a copy).
And you may also use different peers for different tasks. By default you will share your data with 5 peers, but for some critical stuff (eg. financial transactions), you will ask some established notary financial peer to keep a copy of your data.

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

## LIF Development Plan - From single mongo to a distributed one
- Let's assume that there is only one LIF user and it is implemented with a local mongo server, and he use his browser to access it
  He can store any data (json) and publish it with a verified signature. If he install a web server , he can publish it to the world. Anyone can view it and they can be sure that the user published that data (because he signed it; no one can fake his signature, using private/pulbic keys)
- If the system is useful and another user (your friend) decides to use LIF and install his own server, and if you are doing some interaction together, then you will be interested in his data (eg. you use it to track expense/payments). 
- How difficult is it to sync those two servers? Easy. Each user just needs to copy the other's JSON to his own server. It is just a simple copy of JSON (no complex merge. each one just writes his own JSONs. So you just need to copy the others)
- LIF is now useful for those two users,and  more users are starting to use LIF (because you tell your friends) and different users interact with each other. You could still sync all the mongos, but you may not want to. You are just interested in the JSONs of the ones you interact with (and probably only the ones that are relevant for you and the other parties). So your server just sync the JSONs from all the parties you interact with it and only for transactions you care about (eg. he sent me money)
- As LIF becomes more important to you (or your biz), you want to have a copy in a safe place. On the other hand, if more users are using LIF, there will be incentive for some organization to offer replication of local mongos and share it to the world. So if you are a small biz that uses LIF, you may want to replicate it to several places (eg. in US, Europe and Japan). let's call him "aggregator" (he may replicate JSON from thousand of users). 
- another way to look at those "aggregators", is as a "notary" service. you use it as a service to write the JSON at a safe place (and it can be later used as a proof).
- As more and more users start using LIF, there will be evolution of super notaries, that aggregate json of smaller notaries. Until eventually there will be some huge notaries (eg. Amazon, google, Akami etc). Note, you as well are small notary of your own transactions and the ones you interact with.
- So as the network grows, and there are more and more interactions between users, and more and more aggregation of notaries, there is a big chance that your JSON will be found in many places.
Eg. Let's assume you use LIF coins and you have interaction with a freelancer, both you and him will have copies of the transactions between you too. And both of you will publish it to some notaries. The freelancer may be working with an accountant and a lawyer, and they also will have copies of the freelancer transaction (and your transactions with the freelancer). They all save copies to some other notaries which in turn save it to some big ones. This way, your JSON will be propagated across the network and there will be many copies of it. Not only the transaction, but also supporting transactions (eg. receipts).

## How can you verify a transaction with LIF?
- the key concept is that there are many copies of the transaction with many verified timestamps along the way from many notaries. and You can use those copies and timestamp to retrospectively rebuild a complete chain of logs of the transaction so you can verify it. You can construct a log that describes the complete history of that origin JSON (and may take time, but it is possible. All is public)
- As example, let's first assume we have two PCs connected to each other and you connect wireshark on one of the network interfaces and capture all the TCP/IP packets that pass along the way. if you do it, you can retrospectively  follow the TPC/IP packets, recreate the tcp stream and know for 100% what traffic was sent, which connections, stream etc.
- This RETROSPECTIVE review of the packets, is the key point for verification and trust in LIF. In the LIF network, each JSON is spread all over the network and you can use all the JSONs, and recreate chain of events to decide if a transaction happen, by whom and when. 
- Can someone change your JSON? NO. Only you can sign your JSON.
- Can someone change the order of your JSONs? NO, anyone can either have a copy or not.
- Each user publishes a signed JSON sequentely (ie with timestamp). You can trust that this JSON was generated by a specific user. But you cannot trust the timestamp (i.e. order).
  a user may fake and sign a fake timestamp). One of the options is that you may want to include in your important JSONs (eg. money transfer), some time stamps from trusted notary services. eg, you may ask your bank to sign a your json with timestamp and use that timestamp for the transaction. 
- so how do you verify a transaction? in retrospective. when you want to check if a transaction is legit, you check all the available JSON and backtrace that transaction. Because there are copies in many places, you will be able to recreate it with high probability. you may be missing some JSONs, but usually each real transaction has indirect copies (eg, if you make a payment, there will be a record in the accounting, and you can use that timestamp to put a min/max time frame for your transaction). the information may not be complete, so at current time, the transaction might be considered valid. But over time, as more json are published and smarter verification checks evolve, you can improve your verification function. You will be able to decide if the transaction is valid or not. and it is up to you to decide if to trust it or not and how many checks and effort you want to put into it (for small transaction little, for buying a house alot)
- as the usage of LIF increases, there will be some special services that evolve, to decide for you if a transaction is valid or not. and those services will gain trust over time. if for example, they will do a lousy job and verify transactions that they weren't supposed to verify, it will be found. because anyone can run the verification and publish that that service was wrong here. over time, there will be services you will gain more and more trust and you can just use those services instead of verifying yourself.
- so at start, you may not be able to trust LIF, but over time, with evolution, it will become more and more trusted. And each party has a huge incentive to be trusted and trust the system.
- there might be some cases where it will not be able to decide a conflict (I said I paid you, you claim I didn't). Those cases will be rare as the LIF network grows (because almost always you can recreate the history). And for those case, we will define some rules to resolve conflicts (eg. the JSON that has the maximum number of copies, the first to arrive a reputed notary, or other).  Similar things happen when a Football match ends with an even score, and you have rounds of direct-kicks (Pendel) to decide the winner.
- One way to look at that, is that every user is a blockchain. if you don't put effort into publishing it to some reliable notaries, it's your problem. it will not get to anywhere and you may lose it. you need to put effort into making sure it arrives with some big blockchains.

## What is ink/paper?
Analogy of the real world to show effort. When you write a note to your friend, you will just use a piece of paper and a pen. If you want to show more effort, you may buy a special gift card. For money, governments use very expensive paper and ink.
In LIF, ink/paper analogy is computational power. You solve a difficult puzzle to show you spent CPU time on it.

## How to handle spammers?
in LIF,  bad nodes that send fake JSON (spammers), will hurt themself, because no one will trust them over time. As time passes, everyone can agree who is spammer. In retrospect, you can know who the spammer is, by going backwards and checking all his JSONs. Then some companies will start building lists of peers with bad reputation so you can easily block. or with good reputation so you can believe to that publisher.

How to convert existing http services to LIF?
There will be many channels with different topics. Every user will listen to the channel he is interested in.
Some channels will be very efficient for small json, and some channels for videos.

## How to implement Crypto currency with LIF?
Crypto currency involved two main parts: mining new coins, and keeping ledger of transactions to decide who is the owner of the coins
For mining, no need to invent new algorithms. Just copy an implementation from Bitcoin, Etherium or other. There will probably be multiple crypto currencies implementations over LIF. We call this writing notes with an expensive ink/paper.
For the ledger of transactions, ie blockchain, we will just use the built “data twisting” feature of LIF. The initial owner is the one that has proof of work (expensive ink/paper), and the rest of the transactions (I paid you) is guaranteed in LIF, so no need for a explicit and expensive network-consensus blockchain. It’s built-in.

## How can anyone issue his own money?
Anyone can issue his own coins. It’s value depends on the trust of others.
For example, a group of poker players may decide to track poker game results using LIF to track who owns money to other players. As an alternative to notes. 

## How to implement email systems with LIF?
Derry writes email (JSON) to LIF email channel.  Eden listen to the email channel. Eden will receive emails only from the users in his contacts.
Eden will publish that he ignores emails from unknown sources. 
if someone unknown really wants to send email to derry, he can still do it but he will have to use an expensive pen/paper (ie to invest computational power and solve a puzzle to provide it )
this will get rid of spam problem. someone that really wants to contact you will have to spend some "money".
your email will be encrypted with PGP, so no one can read them..

## How to implement file sharing with LIF?
You publish JSON with BLOB that includes checksum of the video chunks. If you want to watch the video, you need to get the checksums, and then download the chunks using bittorrenttorrent/ipfs/other

## How to validate a blockchain?
XXX: TODO
The main parts are retrospective review of the data and publication of the functions.
In today’s blockchain technology, you must resolve all conflicts and agree on the transaction before closing the block, and achieving network consensus. With LIF, you can defer this validation to later on. 

## How to resolve conflicts (Conflict Resolution Algorithm)?
XXX TODO

## How to find other peers?
XXX TODO - there are P2P protocols that already solved this problem (eg. DHT)

## How to query for data?
XXX TODO:
We will have several indexes to find transactions per subject (eg. financial, dns, etc)
Need way to find blocks of specific person

## What is the difference between Notary Peer and other Peers?
XXX TODO:

## How does LIF work underneath?
XXX TODO:

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
sudo usermod -aG docker $USER

// re-login to your user and verify you can run docker command without sudo
sudo systemctl restart docker
docker run hello-world

// install docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Running DB server

```
$ docker-compose up -d server_dev
```
### Instal dependencies
```
$ npm install
```

The DB server will be running at [http://localhost:3101](http://localhost:3101).
And will use local mongo container. Verify it works via a simple client script:

```
$ node pkg/example_client.js
```

You should see output like:


```
NOTICE: publish_passport: success
NOTICE: validate_passport: success
```

Useful docker commands:

```
docker-compose restart server_dev
docker-compose logs --tail=100 --follow server_dev
```

For production mode add ".server.env" file with "MONGO_URI" variable defined.
To start production server on 80 port run:
```
$ docker-compose up -d server
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

