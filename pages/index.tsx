import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { History, IconBox, Logo, SprinkleButton } from "../components";
import { db } from "../firebase";
import dayjs from "dayjs";

const Title = styled("div")(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  textAlign: "center",
}));

const Subtitle = styled("div")(() => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "rgba(6, 81, 0, 0.73)",
  textAlign: "center",
}));

const LastWateringTitle = styled("div")(() => ({
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "24px",
}));

const LastWateringSubtitle = styled("div")(() => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "21px",
  color: "#4A4A4A",
}));

const EditButton = styled(IconButton)(() => ({
  color: "#383838",
  border: "0.5px solid #b9b9b9",
}));

const Footer = styled(Box)(() => ({
  backgroundColor: "#3D7738",
}));

type Watering = {
  type: string;
  wateredAt: string;
};

export default function Home() {
  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("");
  const [waterings, setWaterings] = useState<Watering[]>([]);

  useEffect(() => {
    const query = ref(db);

    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        setName(data.name);
        setSpecie(data.specie);
        setWaterings(
          // @ts-ignore
          Object.values(data.waterings).sort(
            // @ts-ignore
            (a, b) => new Date(b.wateredAt) - new Date(a.wateredAt)
          )
        );
      }
    });
  });

  const sprinkle = () => {
    const query = ref(db);

    onValue(query, (snapshot) => {
      const data = snapshot.val();

      set(query, {
        ...data,
        startWatering: true,
      });
    });
  };

  return (
    <Box height={"100vh"}>
      {/* HEADER */}
      <Box paddingTop="56px">
        <Grid container>
          <Grid xs={12}>
            <Title>{name}</Title>
            <Subtitle>{specie}</Subtitle>
          </Grid>
          <Grid xs={12}>
            <Box textAlign="center" paddingTop="8px">
              <EditButton color="primary" size="small">
                <EditIcon fontSize="small" />
              </EditButton>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* SPRINKLE HISTORY */}
      <History waterings={waterings} />

      {/* LAST WATERING */}
      <Box
        height="160px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <IconBox />
        <LastWateringTitle>Última rega</LastWateringTitle>
        <LastWateringSubtitle>
          {dayjs(waterings[0]?.wateredAt).format("DD/MM [às] H[h]mm[min]")}
        </LastWateringSubtitle>
      </Box>

      {/* LOGO */}
      <Footer
        display="flex"
        alignItems="center"
        height="64px"
        paddingLeft="24px"
      >
        <Logo />
      </Footer>

      {/* SPRINKLE */}
      <div onClick={() => sprinkle()}>
        <SprinkleButton />
      </div>
    </Box>
  );
}