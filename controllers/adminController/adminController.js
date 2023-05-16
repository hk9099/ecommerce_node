module.exports.getLogin = (req, res) => {
    res.render('admin/auth-login')
}

module.exports.getRegister = (req, res) => {
    res.render('admin/auth-register')
}

module.exports.dashboard = (req, res) => {
    res.render('admin/index')
}
