const express = require('express');
const Joi = require('joi');

const db = require('../db/connections');

const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-z0-9_]+$)/).min(2).max(16).required(),
    password: Joi.string().min(8).max(20).required(),
})

router.get('/', (res, req) => {
    res.json({
        message: "🔓"
    })
});