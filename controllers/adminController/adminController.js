const Registration = require('../../model/adminModel/adminModel');

module.exports.getLogin = async (req, res) => {
    res.render('admin/auth-login')
}

module.exports.getRegister = async (req, res) => {
    res.render('admin/auth-register')
}

module.exports.postRegister = async (req, res) => {
    const user = await Registration.create(req.body);
    console.log(user);
    if (user) {
        req.flash('success', 'Data added successfully');
        return res.redirect('/admin');
    } else {
        req.flash('error', 'Data not added');
        return res.redirect('/auth-register');
    }
}

module.exports.dashboard = async (req, res) => {
    res.render('admin/index')
}
