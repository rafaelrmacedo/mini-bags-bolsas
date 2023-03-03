import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [referencia, setReferencia] = useState(dataEdit.referencia || "");
  const [nome, setNome] = useState(dataEdit.nome || "");
  const [valor, setValor] = useState(dataEdit.valor || "");
  const [tamanho, setTamanho] = useState(dataEdit.tamanho || "");
  const [linha, setLinha] = useState(dataEdit.linha || "");

  const handleSave = () => {

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { referencia, nome, valor, tamanho, linha };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { referencia, nome, valor, tamanho, linha }]
      : [...(data ? data : [])];

    localStorage.setItem("adicionar_produto", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Produtos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Referencia</FormLabel>
                <Input
                  type="text"
                  value={referencia}
                  onChange={(e) => setReferencia(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Valor</FormLabel>
                <Input
                  type="currency"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Tamanho</FormLabel>
                <Input
                  type="text"
                  value={tamanho}
                  onChange={(e) => setTamanho(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Linha</FormLabel>
                <Input
                  type="text"
                  value={linha}
                  onChange={(e) => setLinha(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
