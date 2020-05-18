/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function(req, res) {
        try {
            let params = req.allParams();
            console.log(params);
            if (!params.name) {
                return res.badRequest({ err: 'the name is required field' });
            }
            const results = await User.create({
                name: params.name,
                age: params.age,
                address: params.address,

            });
            return res.json({
                status: true,
                results: results
            });
        } catch (err) {
            return res.serverError(err);
        }
    },
    find: async function(req, res) {
        try {
            const findUsers = await User.find();
            return res.ok(findUsers);
        } catch (err) {
            return res.serverError(err);
        }

    },


    findOne: async function(req, res) {
        try {
            const findOneUser = await User.findOne({ id: req.params.id });
            return res.ok(findOneUser);
        } catch (err) {
            return res.serverError(err);
        }
    },


    update: async function(req, res) {
        try {
            let params = req.allParams();
            let attributes = {};
            if (params.name) {
                attributes.name = params.name;
            }
            if (params.age) {
                attributes.age = params.age;
            }
            if (params.address) {
                attributes.address = params.address;
            }
            const result = await User.update({ id: req.params.id }, attributes);
            return res.ok(result);

        } catch (err) {
            return res.serverError(err);
        }

    },
    delete: async function(req, res) {
        try {
            let params = req.allParams();
            const results = await User.destroy({ id: params.id });
            return res.ok(results);
        } catch (err) {
            return res.serverError(err);
        }

    }



};