import {
  Box,
  createTheme,
  Drawer,
  styled,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Form, Formik, useFormik } from "formik";
import { get, ref, set } from "firebase/database";
import { db } from "../firebase";

interface FormValues {
  name: string;
  specie: string;
}

type Props = {
  isOpen: boolean;
  toggleDrawer: () => void;
  initialValues: FormValues;
};

const CustomizedDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    border-radius: 30px 30px 0px 0px;

    padding-top: 40px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
  }
`;

const CustomizedTextField = styled(TextField)`
  margin-top: 16px;

  & .MuiFormLabel-root {
    font-weight: 500;
    color: #383838;
  }
`;

const Header = styled("h1")`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #383838;
  margin: 0;
`;

const Description = styled("span")`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(6, 81, 0, 0.73);
`;

const Button = styled("button")`
  background: #3d7738;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  width: 100%;
`;

const Label = styled("span")`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#383838",
    },
  },
});

export const EditPlantDetails = ({
  isOpen,
  toggleDrawer,
  initialValues,
}: Props) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const query = ref(db);

      get(query).then((snapshot) => {
        if (snapshot.exists()) {
          set(query, {
            ...snapshot.val(),
            name: values.name,
            specie: values.specie,
          });
        }
      });
    },
  });

  useEffect(() => {
    formik.setValues(initialValues);
  }, [initialValues]);

  return (
    <CustomizedDrawer anchor="bottom" open={isOpen} onClose={toggleDrawer}>
      <Header>Editar planta</Header>
      <Description>Qual o nome e a espécie da sua planta?</Description>

      <form onSubmit={formik.handleSubmit}>
        <ThemeProvider theme={theme}>
          <CustomizedTextField
            fullWidth
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            label="Nome da planta"
            variant="standard"
          />
          <CustomizedTextField
            fullWidth
            id="specie"
            name="specie"
            value={formik.values.specie}
            onChange={formik.handleChange}
            label="Espécie da planta"
            variant="standard"
          />
        </ThemeProvider>

        <Box display="flex" flexDirection="row-reverse">
          <motion.div
            whileTap={{ scale: 1.2 }}
            style={{ paddingTop: "24px", width: "160px" }}
          >
            <Button type="submit">
              <Label>Confirmar</Label>
            </Button>
          </motion.div>
        </Box>
      </form>
    </CustomizedDrawer>
  );
};
