const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://chaman:ajGDpbWsBktGjtW6@cluster0.wmskavk.mongodb.net/?retryWrites=true&w=majority/grocery_delivery", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
