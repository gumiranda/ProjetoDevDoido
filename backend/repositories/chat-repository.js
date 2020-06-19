require('../models/chat-model');
const fs = require('fs');
const base = require('../bin/base/repository-base');

class chatRepository {
  constructor() {
    this._base = new base('Chat');
    this.projection = 'userDest userRemet createdAt lastMessage messages';
    this.projection2 = 'userDest userRemet createdAt lastMessage';
  }

  async create(data) {
    return await this._base.create(data);
  }

  async sendMessage(id, data, user) {
    return await this._base.sendMessage(id, data, user);
  }

  async deleteMessage(id, id2) {
    return await this._base.deleteMessage(id, id2);
  }

  async getAll() {
    return await this._base.getAll();
  }

  async getMyChat(page, user) {
    return await this._base.getMyChat(page, user);
  }

  async getMyChats(page, user) {
    const chats = await this._base._model
      .find(
        {
          $or: [
            {
              $and: [{ userDest: { $ne: user._id } }, { userRemet: user._id }],
            },
            {
              $and: [{ userRemet: { $ne: user._id } }, { userDest: user._id }],
            },
          ],
        },
        this.projection,
      )
      .populate({ path: 'userDest', select: 'nome photo_url' })
      .populate({ path: 'userRemet', select: 'nome photo_url' })
      .skip((page - 1) * 10)
      .limit(10)
      .sort({ dataCriacao: -1 });
    const chatsCount = await this._base._model
      .find(
        { $or: [{ userRemet: user._id }, { userDest: user._id }] },
        this.projection,
      )
      .count();
    return {
      chats,
      chatsCount,
    };
  }

  async getByPage(id, page) {
    const position = page * -20;
    const array = await this._base._model
      .findOne({ _id: id }, { messages: { $slice: [position, 20] } })
      .populate({ path: 'messages.user', select: 'nome photo_url' });
    return array;
  }

  async getAllByPageWithoutGeo(page, coords, maxDist) {
    return await this._base.getAllByPageWithoutGeo(page, coords, maxDist);
  }

  async delete(id) {
    return await this._base.delete(id);
  }
}

module.exports = chatRepository;
