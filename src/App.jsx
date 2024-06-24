import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TextField } from "@mui/material";

function App() {
    const [count, setCount] = useState(0);

    const [dpi, setDpi] = useState();
    const [sens, setSens] = useState();
    const [newdpi, setNewdpi] = useState();
    const [newsens, setNewsens] = useState();

    const [pau, setPau] = useState();
    const [dev, setDev] = useState();

    var ext;
    var aux;
    var message;

    useEffect(() => {
        // console.log("ai");
        convert();
    }, [newdpi, newsens, dpi, sens]);

    function convert() {
        if (newdpi != undefined) {
            ext = (dpi * sens) / newdpi;
            aux = Math.round(ext * 1000) / 1000;
            let close = Math.round((aux - ext) * 1000 * 100);

            setPau(aux);

            console.log(close);
            if (close != 0)
                if (close > 0)
                    setDev(
                        " your sensitivty is " +
                            (close / 100 - 1) * -100 +
                            "% more close from " +
                            (aux - 0.001) +
                            " than from " +
                            aux
                    );
                else
                    setDev(
                        " your sensitivty is " +
                            (close / 100 + 1) * 100 +
                            "% closer from " +
                            aux +
                            " than from " +
                            (aux + 0.001)
                    );
        } else if (newsens != undefined) {
            ext = (dpi * sens) / newsens;
            aux = Math.round(ext);

            setPau(aux);
        }
    }

    return (
        <>
            <div>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>

                <h1>Vite + React</h1>
            </div>

            <div>
                <TextField
                    variant="outlined"
                    type="number"
                    label="Your Current DPI"
                    // value={dpi}
                    onChange={(e) => setDpi(e.target.value)}
                />

                <TextField
                    variant="outlined"
                    type="number"
                    label="Your Current Sens"
                    // value={sens}
                    onChange={(e) => setSens(e.target.value)}
                />
            </div>
            <br />
            <div>
                <TextField
                    variant="outlined"
                    type="number"
                    label="Your New DPI"
                    // value={newdpi}
                    onChange={(e) => setNewdpi(e.target.value)}
                />
                <p>or</p>
                <TextField
                    variant="outlined"
                    type="number"
                    label="Your New sens"
                    // value={newsens}
                    onChange={(e) => setNewsens(e.target.value)}
                />
            </div>
            <p>Your new Dpi or Sensitivity is: {pau}</p>
            <p>{dev}</p>
        </>
    );
}

export default App;
