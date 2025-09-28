import "../styles/utils.css"
import { Menubar } from "primereact/menubar";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import logo from "../assets/logo.png"
import { Avatar } from "primereact/avatar";

function TopBar() {

    const items = [
        {
            label: "Home",
            icon: "pi pi-home"

        }
    ];

    const logoItem = (
        <a href="/menu">
            <Image src={logo} width="100" />
        </a>
    );

    const justifStart = {
        justifyContent: "start",
    }
    
    const end = (
        <div>
            <div className="flex align-items-center gap-2">
                <Avatar label="R" size="xlarge" shape="square"  />
                <div style={{
                    display: "flex",
                    alignItems: "start",
                    flexDirection: "column",
                    justifyContent: "start",
                }}>
                    <span className="m-0 font-bold bg-cyan-300">Username</span>
                    <span className="m-0 text-100 text-sm">ELO</span>
                </div>
            </div>
        </div>
    );

    return (
        <Menubar className="p-2 px-7 m-0 bg-" start={logoItem} end={end} />
    );
}

export default TopBar;