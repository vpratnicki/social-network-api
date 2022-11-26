const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 250,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: []
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// get total count of reactions
ThoughtSchema.virtual('recationCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;