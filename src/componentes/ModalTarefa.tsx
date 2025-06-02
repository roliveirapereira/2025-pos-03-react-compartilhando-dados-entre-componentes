"use client";
import { useState } from "react";

interface ModalTarefaProps {
    aoAdicionar: (titulo: string) => void;
    aoFechar: () => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({ aoAdicionar, aoFechar }) => {
    const [ titulo, setTitulo ] = useState("");

    const adicionar = () => {
        if (titulo.trim() === "") return;
        aoAdicionar(titulo);
        aoFechar();
    };

    return (
        <div className="fixed bg-[#0000003b] inset-0 flex justify-center items-center">
            <div className="backdrop-blur border-to-blue-500 bg-white/30 p-4 rounded">
                <h2>Nova tarefa🫣</h2>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="w-full border px-3 py-2 mb-4 rounded border-white/50 focus:border-blue-500 focus:outline-none"
                    placeholder="Título da tarefa"
                />
                <div className="flex justify-end gap-2">
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded-2xl"
                        onClick={aoFechar}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-2xl"
                        onClick={adicionar}
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    )
    
};

export default ModalTarefa;