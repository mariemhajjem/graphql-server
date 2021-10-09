const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString
} = require('graphql')

const wordType = new GraphQLObjectType({
    name : 'word',
    description : 'single word',
    fields : {
        lang : {
            type : GraphQLString,
            description : ''
        },
        word : {
            type : GraphQLString,
            description : ''
        },
        synonym : {
            type : new GraphQLList(GraphQLString),
            description : ''
        },
    }
})

const queryType = new GraphQLObjectType({
    name : 'query',
    description : 'this is query type',
    fields: {
        words: {
            type : new GraphQLList(wordType),
            description : 'List of words returned',
            resolve : (_,args) => [{word: 'go'}]
        }
    }
})

const schema = new GraphQLSchema({
    query : queryType,
})
exports.schema = schema;