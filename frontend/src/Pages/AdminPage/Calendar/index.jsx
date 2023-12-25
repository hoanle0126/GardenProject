import { Link } from "react-router-dom";

function CalendarPage() {
  return (
    <>
      <section className="header__top">
        <span className="header__top--header">Calendar</span>
        <div className="header__top--breadcrumbs">
          <Link to={"/dashboard"} className="text-gray-1 font-[600]">
            Home
          </Link>
          <span className="text-gray-1 font-[600]">/</span>
          <span className=" font-[600] text-dark">Calendar</span>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default CalendarPage;
