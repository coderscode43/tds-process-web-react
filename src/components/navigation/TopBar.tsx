import SCButton from "../component/SCButton";

const TopBar = () => {
  return (
    <>
      <nav className="border-b border-gray-200 shadow shadow-gray-200">
        <div className="flex items-center justify-between px-12">
          <div className="flex items-center justify-center gap-8">
            <div>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div>
              <img className="h-14 w-56" src="/logo/TOS.png" />
            </div>
          </div>
          <div>
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
              TDS-O-Smart
            </h2>
          </div>
          <div className="flex items-center justify-center gap-8">
            <div>
              <SCButton
                btnName="TDS Mapper"
                btnAlt="TDS Mapper Button"
                imgSrc="/gificons/OpenFolder.gif"
              />
            </div>
            <div>
              <img
                className="h-8 w-8"
                src="/images/user.png"
                alt="User Image"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
