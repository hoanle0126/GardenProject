import { Outlet } from "react-router-dom";
import CommerceHeader from "./Header/header";
import Footer from "./Footer";

function CommerceLayout() {
  return (
    <div>
      <CommerceHeader />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default CommerceLayout;
