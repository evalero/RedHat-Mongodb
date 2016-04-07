config = {
    _id : "config",
     members : [
         {_id : 0, host : "mongodb:27019"},
         {_id : 1, host : "mongodb:27029"},
         {_id : 2, host : "mongodb:27039"}
     ]
};
db=db.getSiblingDB("admin");
db.runCommand({replSetInitiate: config});
exit(0);

