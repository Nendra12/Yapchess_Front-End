// import "../styles/topbar.css"
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
    
    const end = (
        <Card className="p-1">
            <div className="flex align-items-center gap-2">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="square" />
                <h3>Username</h3>
            </div>
        </Card>
    );

    return (
        <Menubar className="p-1" start={logoItem} end={end} />
    );
}

export default TopBar;