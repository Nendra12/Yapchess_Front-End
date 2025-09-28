import "../styles/topbar.css"
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

    const logoItem = <Image src={logo} width="100" />
    const userCard = (
        <Card>
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </Card>
    )
    return (
        <Menubar start={logoItem} end={userCard}/>
    );
}

export default TopBar;