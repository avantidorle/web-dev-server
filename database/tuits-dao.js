import tuitsModel from './tuits-model.js';

export const _findAllTuits = () => tuitsModel.find();
export const _createTuit = (tuit) => tuitsModel.create(tuit);
export const _deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const _updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})