import type { Request, Response } from "express";
import * as service from "../services/pacienteService.js";

export async function obterPacientes(req: Request, res: Response){

};

export async function obterPacientePorId(req: Request, res: Response){
    const id: number = Number(req.params.id);
    const usuarioEncontrado = service.obterPacientePorId(id);
    res.json(usuarioEncontrado);
};


export async function criarPaciente(req: Request, res: Response){

};

export async function alterarPaciente(req: Request, res: Response){

};

export async function deletarPaciente(req: Request, res: Response){

};

