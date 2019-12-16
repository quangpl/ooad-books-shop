const mongoose = require('mongoose');
const CustomerSchema = require('../schemas/customer');
let Customer = mongoose.model("Customer", CustomerSchema);
let bcrypt = require('bcrypt');

Customer.register = async ({
    name,
    password,
    email,
    address,
    phone
}) => {
    let hashPassword = await bcrypt.hash(password, 6);
    let newCustomer = new Customer({
      name,
      password: hashPassword,
      email,
      address,
      phone
    });

    await newCustomer.save();
    return newCustomer;
};

Customer.isRegister = async (email) => {
    let customer = await Customer.findOne({
        email: email
    }).exec();
    return !!customer;
};


Customer.login = async ({
    email,
    password,
}) => {
    let user = await Customer.findOne({
        email
    }).exec();

    if (user) {
        let result = await bcrypt.compare(password, user.password);
        if (result) {
            return {
                error: false,
                token: user.token
            }
        }
        else {
            return {
              error: true,
              message: "Wrong password"
            };
        }
    }
    else {
        return {
            error: true,
            message: 'User is invalid'
        }
    }
};

Customer.update = async ({
    id,
    name,
    password,
    phone,
    address,
    email
}) => {

    return await Customer.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
            name: name,
            password: password,
            phone: phone,
            address: address,
            email: email,
        }).exec();
};

Customer.updateDebt = async ({
    id,
    debtMoney
}) => {

    return await Customer.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
            debtMoney: debtMoney
        }).exec();
};

Customer.delete = async (id) => {
    return await Customer.deleteOne({
        _id: id
    }).exec();
};

//Khách hàng nợ không quá 20 000
Customer.isValid = async (id) => {

    let customer = await Customer.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
    return customer.debtMoney < 20000; //fixme : get parameter from setting db
};

Customer.getById = async (id) => {

    return await Customer.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
};

Customer.getByToken = async token => {
  return await Customer.findOne({
    token
  }).exec();
};

Customer.getAll = async () => {
    return await Customer.find({}).exec();
};

module.exports = Customer;