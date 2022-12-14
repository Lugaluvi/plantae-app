import { Box, Divider, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";
import React from "react";
import { IconBox } from "./IconBox";

const Container = styled("div")(() => ({
  height: "calc(100% - 374px)",
  paddingTop: "48px",
  paddingRight: "32px",
  paddingLeft: "32px",
}));

const Title = styled("span")(() => ({
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "13px",
  lineHeight: "20px",
  color: "#4A4A4A",
}));

const ListContainer = styled("div")(() => ({
  height: "calc(100% - 26px)",
  overflowY: "scroll",
}));

const Text = styled("div")(() => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "20px",
  color: "#000000",
}));

type Props = {
  waterings: {
    type: string;
    wateredAt: string;
  }[];
};

export const History = ({ waterings }: Props) => (
  <Container>
    <Grid container paddingBottom="4px">
      <Grid xs={6}>
        <Title style={{ paddingLeft: "60px" }}>Tipo</Title>
      </Grid>
      <Grid xs={6}>
        <Title>Data e Hora</Title>
      </Grid>
    </Grid>
    <Divider style={{ borderColor: "#CCCCCC" }} />
    <ListContainer>
      <Grid container>
        {waterings.map((item, index) => (
          <React.Fragment key={index}>
            <Grid
              xs={6}
              display="flex"
              alignItems="center"
              paddingLeft="4px"
              paddingTop="20px"
            >
              <Box paddingRight="16px">
                <IconBox
                  color={item.type === "manual" ? "red" : "green"}
                  icon={item.type === "manual" ? "human" : "robot"}
                />
              </Box>
              <Text>{item.type === "manual" ? "Manual" : "Automática"}</Text>
            </Grid>
            <Grid xs={6} display="flex" alignItems="center" paddingTop="20px">
              <Text>
                {dayjs(item.wateredAt).format("DD/MM [às] H[h]mm[min]")}
              </Text>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </ListContainer>
    <Divider style={{ borderColor: "#CCCCCC" }} />
  </Container>
);
