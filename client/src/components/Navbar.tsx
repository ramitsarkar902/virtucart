import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { NavItems } from "../services/Items";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Navbar = () => {
  const [screenSize, setScreenSize] = useState(-1);
  const [mod1,setMod1] = useState(false);
  const [mod2,setMod2] = useState(false);
  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);
  const iconSize = screenSize >= 640 ? "medium" : "small";
  return (
    <div className="fixed left-1/2 -translate-x-1/2 p-3 w-[95%] mx-auto flex items-center justify-between rounded-2xl h-[8vh] mt-[2vh] mx-auto bg-[#1f1f1f]">
      <h1 className="text-[0.85rem] font-[500]">
        Virtu<span>Cart</span>
      </h1>
      <div className="menu relative">
        <MenuIcon fontSize={iconSize} />
        <div className="modal absolute top-8 right-0 bg-black flex flex-col gap-4 rounded-3xl p-3 min-h-[20vh] w-[50vw] whitespace-nowrap ">
          {NavItems.map((n) => {
            return (
              <div
                className="eachitem text-[#09dd6d] flex items-center justify-between w-full"
                key={n.id}
              >
                <h1>{n.name}</h1>
                <KeyboardArrowDownIcon
                  fontSize={iconSize}
                  className="text-white"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
