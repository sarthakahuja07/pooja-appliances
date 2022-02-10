const mongoose = require('mongoose');
const Product = require('../models/products');
const Company = require('../models/companies');

const getProducts = async (req, res, next) => {
    try {

        const category = req.query.category;
        const company = req.query.company;
        const appliances = req.query.app;
        let products

        const companies = await Company.find({ app: appliances }).select('_id');

        appliances ?
            category && category !== "null" ?
                (
                    products = await Product.find({ // all products of a category for an appliance
                        $and: [{
                            company: {
                                $in: companies
                            }
                        }, {
                            categories: {
                                $in: [category]
                            },
                        }]
                    }).populate({ path: 'company', select: 'name' }).populate({ path: 'categories', select: 'name' })
                )
                :
                company && company !== "null" ? // all product of a company for an appliance
                    products = await Product.find({
                        $and: [{
                            company: {
                                $in: companies
                            }
                        }, {
                            company: {
                                $in: [company]
                            }
                        }]
                    }).populate({ path: 'company', select: 'name' }).populate({ path: 'categories', select: 'name' })
                    :
                    products = await Product.find({ //all products of the appliance
                        company: {
                            $in: companies
                        }
                    }).populate({ path: 'company', select: 'name' }).populate({ path: 'categories', select: 'name' })
            :
            company && company !== "null" ?
                products = await Product.find({ // all products of a company
                    company: {
                        $in: company
                    }
                }).populate({ path: 'company', select: 'name' }).populate({ path: 'categories', select: 'name' })
                :
                category && category !== "null" ?
                    products = await Product.find({ // all products of a category
                        categories: {
                            $in: category
                        }
                    }).populate({ path: 'company', select: 'name' }).populate({ path: 'categories', select: 'name' })
                    :
                    products = await Product.find({}).populate({ path: 'company', select: 'name' }).populate({ path: 'categories', select: 'name' }); // all products


        if (products.length > 0) {
            res.status(200).json({
                status: 'success',
                data: products,
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'No products found'
            })
        }
    }
    catch (err) {
        err.status = 500;
        res.status(500).json(err);
    }
}




const getSearchedProducts = async (req, res, next) => {
    const search = req.query.key;
    const appliances = req.query.app;

    try {
        if (!search) {
            res.status(200).json({
                status: 'success',
                data: [],
            });
        } else {
            const regex = new RegExp("\\b" + search, "i");
            const companies = await Company.find({ app: appliances }).select('_id');

            // const products = await Product.find({ $or: [{ 'name': { $regex: regex } }, { 'company': { $regex: regex } }] });

            const products = await Product.find({
                $and: [{
                    company: {
                        $in: companies
                    }
                }, {
                    name: {
                        $regex: regex
                    }
                }]

            }).populate({ path: 'company', select: 'name' }).populate({ path: 'categories', select: 'name' });

            if (products) {
                res.status(200).json({
                    status: 'success',
                    data: products,
                });
            }
            else {
                res.status(404).json({
                    status: 'fail',
                    message: 'No products found'
                })
            }
        }
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}


const getRelatedProducts = async (req, res, next) => {
    const cats = req.query.categories;
    const company = req.query.company;
    const appliances = req.query.app;
    try {
        const companies = await Company.find({ app: appliances }).select('_id');
        const products = await Product.find({
            $and: [{
                company: {
                    $in: companies
                }
            }, {
                $or: [{
                    categories: {
                        $in: cats
                    }
                }, {
                    company: {
                        $in: company
                    }
                }]
            }]

        }).populate({ path: 'company', select: 'name' }).populate({ path: 'categories', select: 'name' }).limit(8);

        if (products) {
            res.status(200).json({
                status: 'success',
                data: products,
            });
        }
        else {
            res.status(404).json({
                status: 'fail',
                message: 'No products found'
            })
        }

    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}



const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id).populate({ path: 'company', select: 'name' }).populate({ path: 'categories', select: 'name' });
        if (product) {
            res.status(200).json({
                status: 'success',
                data: product,
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'No products found'
            })
        }
    } catch (err) {
        err = new Error('Error while fetching products');
        err.status = 500;
        next(err);
    }
}



const postProduct = async (req, res, next) => {
    const product = new Product(req.body)

    product.variants.colors = req.body.colors
    product.variants.sizes = req.body.sizes

    try {
        const newProduct = await product.save();
        res.status(201).json({
            status: 'success',
            data: newProduct,
        })
    }
    catch {
        err = new Error('Error while creating product');
        err.status = 500;
        next(err);
    }
}

const updateProductById = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (product) {
            res.status(200).json({
                status: 'success',
                data: product,
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'No product found'
            })
        }
    }
    catch {
        err = new Error('Error while updating product');
        err.status = 500;
        next(err);
    }
}

const deleteProductById = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.status(200).json({
                status: 'success',
                data: product,
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'No product found'
            })
        }
    }
    catch {
        err = new Error('Error while deleting product');
        err.status = 500;
        next(err);
    }
}
const deleteProducts = async (req, res, next) => {
    try {
        const product = await Product.deleteMany({});
        if (product) {
            res.status(200).json({
                status: 'success',
                data: product,
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'No product found'
            })
        }
    }
    catch {
        err = new Error('Error while deleting product');
        err.status = 500;
        next(err);
    }
}

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    updateProductById,
    deleteProductById,
    deleteProducts,
    getSearchedProducts,
    getRelatedProducts
}
