/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");
const rutaback = require("../../src/routes/recipes/recipe");
const agent = session(app);
const agent2 = session(rutaback);
const recipe = {
  name: "Milanea a la napolitana",
  resume:"asdadasdsa"
};

describe("Recipe routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );
  describe("GET /recipes", () => {
    it("should get 200", () => agent.get("/recipes").expect(200));
  });
});
const recipe2 = {
  name: "Fideos con tuco",
  resume: "asd",
};
describe("Recipe routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );
  describe("POST /recipe", () => {
    it("POST  agregar una nueva receta y devolver su nombre y su resumen",function(){
      agent2.post('/recipe')
      .send(200)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res){
        expect(res.body).toEqual("Fideos con tuco", "asd")
      })
    });
  });
});
