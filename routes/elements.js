import express from "express";

const router = express.Router();

let elements = [];

router.get("/elements", (req, res) => {
  res.json(elements);
});

router.get("/elements/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const element = elements.find((e) => e.id === id);

  if (!element) {
    return res.status(404).send("Elemento no encontrado");
  }

  res.json(elements.find((e) => e.id === id));
});

router.post("/", (req, res) => {
  const element = {
    id: elements.length,
    ...req.body,
  };

  elements.push(element);
  res
    .status(201)
    .json({ message: "elemento creado exitosamente", element: element });
});

router.put("/elements/:id", (req, res) => {
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

router.delete("/elements/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const element = elements.find((e) => e.id === id);

  if (!element) {
    return res.status(404).send("Elemento no encontrado");
  }

  elements = elements.filter((e) => e.id !== id);

  res.json({
    mensaje: "Elemento eliminado con éxito",
    usuarioActualizado: element,
  });
});

export default router;
