import express from "express"; //framework utilzado para APIs

const app = express();
app.use(express.json()); //json como padrão nas req e resp http

const PORT: number = 3000;

interface Usuario {
    id: number;
    nome: string;
    telefone: string;
};

const usuarios: Usuario[] = [];
usuarios.push(
    {id: 1, nome: "Samla", telefone: "83999885448"},
    {id: 2, nome: "Heitor", telefone: "83999854128"}
);

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
    const idProcurado: number = Number(req.params.id); //URL é string, precisa converter
    const usuarioEncontrado: Usuario | undefined = usuarios.find((usuario) => usuario.id === idProcurado);
    if(usuarioEncontrado) res.json(usuarioEncontrado);
    else res.status(404).json(`Usuário de id '${idProcurado}' não encontrado.`);
});

// npm run dev (para subir a API)
app.listen(PORT, () => {
    console.log(`A API subiu porta ${PORT}`);
});