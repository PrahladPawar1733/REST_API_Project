import { v4 as uuid } from 'uuid';

let users = [];

export const createUser = (req, res) => {   
    try {
        const user = req.body;
        users.push({ ...user, id: uuid() });
        return res.status(201).json({ success: true, message: `User [${user.username}] added to the database.` });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};

export const getUserById = (req, res) => {
    try {
        return res.status(201).json({ success: true, message: req.params.id });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};

export const deleteUserById = (req, res) => { 
    try {
        users = users.filter((user) => user.id !== req.params.id);
        return res.status(201).json({ success: true, message: `user with id ${req.params.id} has been deleted` });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};

export const updateUserById = (req, res) => {
    try {
        const user = users.find((user) => user.id === req.params.id);
        user.username = req.body.username;
        user.age = req.body.age;
        return res.status(201).json({ success: true, message: `username has been updated to ${req.body.username}.age has been updated to ${req.body.age}` });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};