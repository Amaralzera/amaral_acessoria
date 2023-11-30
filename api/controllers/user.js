
import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM alunos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO alunos(`nome`, `email`, `esporte`, `data_nascimento`, `fone`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.esporte,
    req.body.data_nascimento,
    req.body.fone,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE alunos SET `nome` = ?, `email` = ?, `esporte` = ?, `data_nascimento`, `fone` = ? = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.esporte,
    req.body.data_nascimento,
    req.body.fone,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM alunos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
