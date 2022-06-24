import React, { useState, useEffect } from "react";
import "./App.css";
import { Prueba } from "./interfaces";
import axios, { AxiosResponse } from "axios";

function App() {
  const [pruebaData, setPruebaData] = useState<Prueba[]>([]);

  useEffect(() => {
    axios.defaults.headers.common = {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlibnB3aWhxdWZ1aGF1aHZ0dGpnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NTkzNTkxNSwiZXhwIjoxOTcxNTExOTE1fQ.qMJy8DbyzT93IVvtRhvGzgpV_7bAAHUdePxHMU52Y20",
    };

    axios
      .get<Prueba>(
        "https://ibnpwihqufuhauhvttjg.supabase.co/rest/v1/prueba?select=name"
      )
      .then((Response: AxiosResponse) => {
        console.log("Response:", Response.data);
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
