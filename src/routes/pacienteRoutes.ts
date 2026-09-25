import Router from "express";
import * as controller from "../controllers/pacienteController.js";

const router = Router();

router.get("/pacientes", controller.obterPacientes);
router.get("/pacientes/:id", controller.obterPacientePorId);
router.post("/pacientes", controller.criarPaciente);
router.put("/pacientes/:id", controller.alterarPaciente);
router.delete("/pacientes/:id", controller.deletarPaciente);

export default router;

