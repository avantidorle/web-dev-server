import {_findAllTuits, _createTuit, _deleteTuit, _updateTuit} from "../database/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    console.log(newTuit);
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.userName = "Avanti Dorle";
    newTuit.handle = "avantid";
    newTuit.liked = true;
    newTuit.time = "just now";
    newTuit.avatarIcon = "/images/Avanti.jpeg";
    newTuit.image = "";
    newTuit.contentTitle = "";
    newTuit.content = "";
    newTuit.comments = 0;
    newTuit.retuits= 0;
    newTuit.reshares= 0;

    const insertedTuit = await _createTuit(newTuit);
    console.log(insertedTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await _findAllTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await _updateTuit(tuitdIdToUpdate, updatedTuit);

    res.send(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await _deleteTuit(tuitdIdToDelete);
    res.send(status);
}

export default (app) => {
 app.get('/api/tuits', findAllTuits);
 app.post('/api/tuits', createTuit);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}