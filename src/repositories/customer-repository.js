const Customer = require('../app/models/customer')

/*exports.post = async(data) => {
    const customer = new customer(data);
    await customer.save();
}

exports.getAll = async () => {
    const res = await Customer.find();
    return res;
}

exports.getById = async(id) => {
    const res = await Customer.findById(id);
    return res;
}

exports.put = async(id, data) => {
    await Customer.findByIdAndUpdate(id, {
        $set:{
            name: data.name,
            email: data.email,
            password: data.password
        }
    });
}

exports.delete = async(id) => {
    await Customer.findByIdAndDelete(id);
}*/
/////////////////////////////////////////////////
exports.register = async(name, email, password) => {
    const result = await Customer.find({email:email});

    if(result.length > 0){
        throw{
            status: 400,
            message: "Usuario ja existente"
        };
    }

    const customer = new Customer();
    customer.name = name;
    customer.email = email;
    customer.password = customer.generateHash(password);

    customer.save ((err, res)=> {
        if(err){
            return {
                success: false,
            message: "Error on save"
            };
        }
    });
    return {customer: customer};
}