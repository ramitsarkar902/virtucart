import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { NavItems } from "../services/Items";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { setActive } from "../store/userSlice";
const Navbar = () => {
  const { userData, active } = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();
  const [screenSize, setScreenSize] = useState(-1);
  const [mod1, setMod1] = useState(false);
  const [mod2, setMod2] = useState(-1);
  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);
  const iconSize = screenSize >= 640 ? "medium" : "small";
  return (
    <div className="fixed left-1/2 -translate-x-1/2 p-3 w-[95%] mx-auto flex items-center justify-between rounded-2xl h-[8vh] mt-[2vh] mx-auto bg-[#1f1f1f]">
      <h1 className="text-[0.95rem] font-[500]">
        Virtu<span>Cart</span>
      </h1>
      <div className="menu sm:hidden relative">
        <MenuIcon
          fontSize={iconSize}
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setMod1(!mod1);
            setMod2(-1);
          }}
        />
        {mod1 && (
          <div className="modal absolute top-8 right-0 bg-black flex flex-col gap-4 rounded-3xl p-3 min-h-[20vh] w-[15rem] whitespace-nowrap ">
            {NavItems.map((n) => {
              return (
                <div
                  className="eachitem relative text-[#09dd6d] flex flex-col gap-2 justify-between w-full "
                  onClick={(e) => {
                    e.preventDefault();
                    if (mod2 === -1) {
                      setMod2(n.id);
                    } else if (mod2 !== -1 && mod2 !== n.id) {
                      setMod2(n.id);
                    } else {
                      setMod2(-1);
                    }
                  }}
                  key={n.id}
                >
                  <div className="input p-1 hover:bg-[#09dd6d] hover:text-black rounded-xl cursor-pointer">
                    {n.id === 1 ? (
                      <div className="flex gap-2 items-center">
                        <div className="img w-[1.5rem] h-[1.5rem] rounded-full bg-white flex items-center justify-center">
                          <img
                            src={userData.img}
                            alt=""
                            className="w-[1.5rem]"
                          />
                        </div>
                        <h1>{userData.name.split(" ")[0]}</h1>
                      </div>
                    ) : (
                      <h1 className="">{n.name}</h1>
                    )}

                    {mod2 !== n.id ? (
                      <KeyboardArrowDownIcon
                        fontSize={iconSize}
                        className="text-white hidden absolute top-[0.4rem] right-[0.2rem]"
                      />
                    ) : (
                      <KeyboardArrowUpIcon
                        fontSize={iconSize}
                        className="text-white hidden absolute top-[0.4rem] right-[0.2rem]"
                      />
                    )}
                  </div>

                  {mod2 === n.id && (
                    <div className="fields flex flex-col p-2 gap-4 bg-[#111111] rounded-xl">
                      {n.fields.map((f) => {
                        return (
                          <div className="eachsub cursor-pointer" key={f.id}>
                            {f.name}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="laptop hidden sm:flex items-center gap-8">
        {NavItems.map((n) => {
          if (n.id !== 1) {
            return (
              <div
                className="eachItem flex items-center relative"
                key={n.id}
                onClick={(e) => {
                  e.preventDefault();
                  if (mod2 === -1) {
                    setMod2(n.id);
                  } else if (mod2 !== -1 && mod2 !== n.id) {
                    setMod2(n.id);
                  } else {
                    setMod2(-1);
                  }
                  dispatch(setActive(n.id));
                }}
              >
                <h1 className=" flex flex-col text-[0.85rem]">
                  {n.name}
                  <div
                    className={`${
                      active === n.id ? "bg-[#09dd6d]" : "bg-[#1f1f1f]"
                    } w-[20px] h-[2px] `}
                  ></div>
                </h1>
                {mod2 !== n.id ? (
                  <KeyboardArrowDownIcon
                    fontSize={iconSize}
                    className="text-white"
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    fontSize={iconSize}
                    className="text-white"
                  />
                )}
                <div className="modal absolute top-10 w-[40vw] left-0">
                  {mod2 === n.id && (
                    <div className="fields flex flex-col p-2 gap-4 bg-[#111111] rounded-xl">
                      {n.fields.map((f) => {
                        return (
                          <div className="eachsub cursor-pointer" key={f.id}>
                            {f.name}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          }
          return null; // Return null for items with n.id === 1 to skip rendering them
        })}
      </div>
      <div className="userdetails hidden sm:flex items-center">
        <div className="flex gap-2 items-center">
          <div className="img w-[1rem] h-[1rem] rounded-full bg-white flex items-center justify-center">
            <img src={userData.img} alt="" className="w-[1rem]" />
          </div>
          <span className="text-[0.85rem]">{userData.name.split(" ")[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
