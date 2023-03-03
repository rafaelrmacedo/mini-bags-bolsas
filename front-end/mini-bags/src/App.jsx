import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GeneratePDF from "./components/GeneratePDF";
import ModalComp from "./components/ModalComp";
import logo from '/crown-icon-transparent-free-png.png'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const db_costumer = localStorage.getItem("adicionar_produto")
      ? JSON.parse(localStorage.getItem("adicionar_produto"))
      : [];

    setData(db_costumer);
  }, [setData]);

  //função de remoção do produto pela referencia
  const handleRemove = (referencia) => {
    const newArray = data.filter((item) => item.referencia !== referencia);

    setData(newArray);

    localStorage.setItem("adicionar_produto", JSON.stringify(newArray));
  };

  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontSize="15px"
      fontFamily="poppins"
    >
      <Box maxW={1000} w="100%" h="100vh" py={10} px={2} >
        <Box justifyContent="center" display="flex" fontSize={"50px"}
          marginBottom={"20px"}>
          <img src={logo} alt="crown-icon" width={"60px"} height={"60px"} />
          <h1>Mini Bags Bolsas</h1>
        </Box>
        <Box justifyContent="center" display="flex">
          <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]} margin={"10px"}>
            ADICIONAR PRODUTO
          </Button>

          <Button colorScheme="blue" onClick={GeneratePDF}  id="generate-pdf-btn" margin={"10px"}>
            GERAR PDF
          </Button>

          <Button colorScheme="blue" margin={"10px"} onClick>
            ENVIAR PEDIDO
          </Button>
        </Box>
        <Box overflowY="auto" height="100%" id="content-container">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th maxW={isMobile ? 5 : 100} fontSize="15px">
                  Referência
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="15px">
                  Nome
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="15px">
                  Valor
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="15px">
                  Tamanho
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="15px">
                  Linha
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ referencia, nome, valor, tamanho, linha }, index) => (
                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                  <Td maxW={isMobile ? 5 : 100}>{referencia}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{nome}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{valor}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{tamanho}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{linha}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ referencia, nome, valor, tamanho, linha, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(referencia)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default App;
