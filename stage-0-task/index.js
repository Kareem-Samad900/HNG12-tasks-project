import express from "express";
import cors from "cors";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);

const app = express();
const PORT = 5001;
app.use(cors());

app.get("/", (req, res) => {
  try {
    const FormattedDateTime = (isoString) => {
      return isoString.format("YYYY-MM-DDTHH:mm:ss[Z]");
    };

    const currentTime = dayjs().utc({ keepLocalTime: true });
    const DateTimeOutput = FormattedDateTime(currentTime);

    res.status(200).json({
      email: "ksbamidele880@gmail.com",
      current_datetime: DateTimeOutput,
      github_url: "https://github.com/Kareem-Samad900/HNG12-tasks-project",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "Server Error": error.message });
  }
});

app.listen(PORT, () => {
  console.log("app listening on PORT: " + PORT);
});
