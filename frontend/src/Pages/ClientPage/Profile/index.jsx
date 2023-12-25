import { Link } from "react-router-dom";
import BackIcon from "~/assets/icons/back";
import { alpha } from "@mui/material";
import { primary, secondary } from "~/context/ColorContext";

function ProfileCommercePage() {
  return (
    <main className="pt-[90px] px-[120px]  pb-[60px]">
      <section className="w-full shadow-md p-[20px] card flex flex-col gap-[20px] mb-[30px]">
        <div className="text-[28px] font-[600] flex items-center gap-[5px]">
          <Link to={-1}>
            <BackIcon
              size={50}
              primary={alpha(primary, 0.5)}
              secondary={alpha(secondary, 0.9)}
              tertiary={alpha(primary, 0.9)}
            />
          </Link>
          <span>Profile</span>
        </div>
      </section>
    </main>
  );
}

export default ProfileCommercePage;
