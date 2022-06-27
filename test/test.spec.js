const supertest = require("supertest");
const app = require("../index");
const api = supertest(app);

test("Register user successful", async () => {
  jest.setTimeout(100000);
  await api
    .post("/api/user/register")
    .send({
      email: "prueba1@gmail.com",
      password: "123456789",
    })
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("logged in user", async () => {
  jest.setTimeout(100000);
  await api
    .post("/api/user/login")
    .send({
      email: "alexandermarquezlamadrid@gmail.com",
      password: "123456789",
    })
    .expect(200)
    .expect("Content-Type", /application\/json/)
    .then(async (response) => await expect(response.body));
});

test("failed login", async () => {
  await api
    .post("/api/user/login")
    .send({
      email: "alexandermarquezlamadrid@gmail.com",
      password: "123456",
    })
    .expect(400)
    .expect("Content-Type", /application\/json/)
    .then(async (response) => await expect(response.body));
});

test("Register Package", async () => {
  jest.setTimeout(100000);
  const response = await api.post("/api/user/login").send({
    email: "alexandermarquezlamadrid@gmail.com",
    password: "123456789",
  });

  const token = response != "" ? response.text.split(":")[1].slice(1, -8) : "";
  if (token != "") {
    await api
      .post("/api/package/create")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "titulo de prueba",
        description: "descripción de prueba",
        price: 12.3,
      })
      .expect(200)
      .expect("Content-Type", /json/);
  }
});

test("get Package", async () => {
  api.get("/api/package/getData").expect(200).expect("Content-Type", /json/);
});

test("Register artist", async () => {
  jest.setTimeout(100000);

  await api
    .post("/api/artist/create")
    .send({
      name: "artist1",
      description: "descripción de prueba",
      services: [
        "Corte de Cabello",
        "Perfilado de Barba",
        "Cabello + Rasurado de Rostro",
      ],
    })
    .expect(200)
    .expect("Content-Type", /json/);
});

test("get artist", async () => {
  api.get("/api/artist/getData").expect(200).expect("Content-Type", /json/);
});
