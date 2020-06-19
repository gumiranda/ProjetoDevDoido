'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const chatModel = new schema(
  {
    userDest: {
      type: ObjectId,
      ref: 'User',
    },
    userRemet: {
      type: ObjectId,
      ref: 'User',
    },
    photo: { type: String },
    lastMessage: { type: String },
    nomeUser: { type: String },
    countMessages: { type: Number, default: 0 },
    dataCriacao: { type: Date, default: Date.now },
    messages: [
      {
        text: String,
        createdAt: { type: Date, default: Date.now },
        user: { type: ObjectId, ref: 'User' },
      },
    ],
  },
  { versionKey: false },
);

chatModel.pre('save', (next) => {
  let agora = new Date();
  if (!this.dataCriacao) this.dataCriacao = agora;
  next();
});

module.exports = mongoose.model('Chat', chatModel);
