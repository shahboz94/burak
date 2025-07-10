import dotenv from "dotenv"; //invarmetiv veribil // eksternel pekej tashqaridan ustanofka qildik.
dotenv.config(); // confik bu mezt .object ,invarmetiv veribil lar bilan boyitib beradi.
import mongoose from "mongoose"; //object , connect esnkins mezt then catch argument .
import app from "./app";
// TCP =BACKENT + DATEBASE
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connected succed");
    const PORT = process.env.PORT ?? 3003;

    app.listen(PORT, function () {
      console.info(`The server is running successfully on port ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB:", err));
