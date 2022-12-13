const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Bookly - Add Product',
        path: '/admin/add-product'
        })
}

exports.postProducts = (req, res, next) => {
    // products.push({ title: req.body.title, price: req.body.price, description: req.body.description ,img: req.body.img });
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {prods: products, pageTitle: 'Bookly - Shop', path: '/'});

};

