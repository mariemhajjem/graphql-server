const express = require('express')
const router = express()
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')
const {schema} = require('./graphql/graphql-schema')


const port = 5000;

router.use(express.json());
router.use(cors());
router.use('/graphql', graphqlHTTP({
    schema,
    graphiql : true
}))

router.listen(port, () => console.log(`server is running on port ${port}`))
