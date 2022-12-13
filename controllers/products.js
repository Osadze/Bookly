const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Bookly - Add Product',
        path: '/admin/add-product'
        })
}

exports.postProducts = (req, res, next) => {
    products.push({ title: req.body.title, price: req.body.price, description: req.body.description ,img: req.body.img });
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    res.render('shop', {prods: products, pageTitle: 'Bookly - Shop', path: '/'});

};

