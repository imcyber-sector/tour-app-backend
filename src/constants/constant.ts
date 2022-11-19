let mongoUrl = process.env.MONGO_URI;

const CONSTANT = {
    MONGO_URL: mongoUrl || "",
    PORT: process.env.PORT || 3000
}

export default CONSTANT;