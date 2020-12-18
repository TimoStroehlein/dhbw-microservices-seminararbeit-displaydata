mongo -- "$MONGO_INITDB_DATABASE" <<EOF
    var user = '$MONGO_INITDB_USERNAME';
    var password = '$MONGO_INITDB_PASSWORD';
    db.createUser({ user: user, pwd: password, roles: ["readWrite"] })
EOF