import { useNavbarItemsList } from "@/utils/useNavbarItemsList";
import { NavbarItems } from "../NavbarItems/NavbarItems";
import cls from "./Navbar.module.scss"
import { useMemo } from "react";

const Navbar = () => {
    const navbarItemsList = useNavbarItemsList();

    const itemsList = useMemo(() => {
        return navbarItemsList.map(item => (
            <NavbarItems key={item.path}
            item={item} />
        ));
    }, [navbarItemsList]);

    return <nav className={cls.navbar}>
        {itemsList}
    </nav>
}

export {Navbar};