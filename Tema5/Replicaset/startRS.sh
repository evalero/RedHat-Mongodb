#bin/bash
#Create path for Replica Set
mkdir -p /data/RS1_1
mkdir -p /data/RS1_2
mkdir -p /data/RS1_3

#Start shard servers
mongod --replSet RS1 --dbpath /data/RS1_1 --port 27017 --noprealloc --nojournal --logpath /data/RS1_1/mongod.log &
mongod --replSet RS1 --dbpath /data/RS1_2 --port 27018 --noprealloc --nojournal --logpath /data/RS1_2/mongod.log &
mongod --replSet RS1 --dbpath /data/RS1_3 --port 27019 --noprealloc --nojournal --logpath /data/RS1_3/mongod.log &

#initiate replica set for each shard
sleep 2
mongo  createRS1.js
#Populate replication database
sleep 10
mongo  populateDB.js
