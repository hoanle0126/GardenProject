import { Link } from "react-router-dom"
import LogoEvergreen from "~/assets/logo"
import ColorContext from "~/context/ColorContext"

const LeftCommerce = () => {
  return (
    <Link to={"/"} className="flex items-end gap-[-10px]">
        <LogoEvergreen
          className={"w-[40px] h-[40px]"}
          leaf={ColorContext.palette.primary.main}
        />
        <span className="ml-[-5px] mb-[-2px] text-green-main-dark font-[700] text-[24px]">
          Garden
        </span>
      </Link>
  )
}

export default LeftCommerce