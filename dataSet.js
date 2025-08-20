export const newUser = {
  id: Date.now(),
  email: Date.now() + "@gmail.com",
  password: "1234"
};

export const existingUser = {
  id: 10,
  email: "deepa@gmail.com",
  password: "1234"
};
export const dataCreateBook = {
  id: Date.now() + Math.floor(Math.random() * 1000),
  name: "Book_" + Math.floor(Math.random() * 1000),
  author: "Author_" + Math.floor(Math.random() * 1000),
  published_year: 2000 + Math.floor(Math.random() * 25),
  book_summary: "Summary_" + Date.now()
};

export const createBookWithMissingParam = {
  id: Date.now() + Math.floor(Math.random() * 1000),
  name: "Book_" + Math.floor(Math.random() * 1000),
 // author: "Author_" + Math.floor(Math.random() * 1000),
  published_year: 2000 + Math.floor(Math.random() * 25),
  book_summary: "Summary_" + Date.now()
};

export const bookSchema = {
  type: "object",
  required: ["id", "name", "author", "published_year", "book_summary"],
  properties: {
    id: { type: ["integer", "null"] },   // Swagger says integer | null
    name: { type: "string" },
    author: { type: "string" },
    published_year: { type: "integer" },
    book_summary: { type: "string" }
  },
  additionalProperties: false
};
export const userCredentialsSchema = {
  type: "object",
  required: ["email", "password"], // required fields
  properties: {
    id: { type: ["integer", "null"] }, // can be int or null
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 1 }
  },
  additionalProperties: false
};



export const dataSet = { dataCreateBook, newUser, existingUser,bookSchema,userCredentialsSchema };
