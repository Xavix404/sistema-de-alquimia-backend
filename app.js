import express from "express";

const app = express();
const port = 3000;

let elements = [];

app.use(express.json());

app.get("/elements", (req, res) => {
  res.json(elements);
});

app.get("/elements/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const element = elements.find((e) => e.id === id);

  if (!element) {
    return res.status(404).send("Elemento no encontrado");
  }

  res.json(elements.find((e) => e.id === id));
});

app.post("/", (req, res) => {
  const element = {
    id: elements.length,
    ...req.body,
  };

  elements.push(element);
  res
    .status(201)
    .json({ message: "elemento creado exitosamente", element: element });
});

app.put("/elements/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const element = elements.find((e) => e.id === id);
  const { name, type } = req.body;

  if (!element) {
    return res.status(404).send("Elemento no encontrado");
  }

  elements[id] = {
    ...elements[id],
    name: name !== undefined ? name : elements[id].name,
    type: type !== undefined ? type : elements[id].type,
  };

  res.json({
    mensaje: "Elemento actualizado con éxito",
    usuarioActualizado: elements[id],
  });
});

app.delete("/elements/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const element = elements.find((e) => e.id === id);

  if (!element) {
    return res.status(404).send("Elemento no encontrado");
  }

  elements.splice(id, 1);

  res.json({
    mensaje: "Elemento eliminado con éxito",
    usuarioActualizado: element,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
