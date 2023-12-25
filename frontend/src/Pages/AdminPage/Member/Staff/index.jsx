import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import {
  Button,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  alpha,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "icons/search";
import { primary, secondary } from "~/context/ColorContext";
import ThreeDotIcon from "icons/ThreeDot";
import { axiosClient } from "~/axios/AxiosClient";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import AddPerson from "icons/add_person";
import DetailsPerson from "icons/detail_person";
import RemovePerson from "icons/remove-person";
import AddStaff from "./add";

function StaffPage() {
  const navigate = useNavigate();
  const [openStaff, setOpenStaff] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const getCustomers = () => {
    setLoading(true);
    axiosClient.get("/users").then((data) => {
      setCustomers(data.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const header = () => {
    return (
      <div className="h-[40px] w-full flex justify-between items-center">
        <div className="w-[300px] h-[40px] relative">
          <span className="absolute w-[40px] h-[40px] flex items-center justify-center">
            <SearchIcon
              primary={alpha(primary, 0.7)}
              secondary={alpha(secondary, 0.7)}
              size={25}
            />
          </span>
          <input
            type="text"
            value={globalFilterValue}
            className="bg-[#ececec]/70 w-[300px] h-full outline-none rounded-md pl-[40px] pr-[10px]"
            onChange={onGlobalFilterChange}
            placeholder="Search"
          />
        </div>
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          startIcon={<AddPerson size={16} primary={"#fff"} />}
          onClick={() => setOpenStaff(true)}
        >
          Add Staff
        </Button>
        <AddStaff open={openStaff} handleClose={() => setOpenStaff(false)} />
      </div>
    );
  };

  const actionTemplate = (item) => {
    return (
      <>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <IconButton color="primary" {...bindTrigger(popupState)}>
                <ThreeDotIcon size={18} primary={"#6C6C6C"} />
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => navigate(`/staff/${item.id}`)}
                  className="flex gap-[5px] items-center"
                >
                  <DetailsPerson size={21} primary={"#000"} />
                  <span>View</span>
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  className="flex gap-[5px] items-center"
                >
                  <RemovePerson size={21} primary={"#000"} />
                  <span>Delete</span>
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </>
    );
  };

  const customerTemplate = (item) => {
    return (
      <div className="h-[40px] flex gap-[20px] items-center">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-[40px] h-[40px] rounded-md"
        />
        <span>{item.name}</span>
      </div>
    );
  };

  return (
    <>
      <section className="header__top">
        <span className="header__top--header">Staff</span>
        <div className="header__top--breadcrumbs">
          <Link to={"/dashboard"} className="text-gray-1 font-[600]">
            Home
          </Link>
          <span className="text-gray-1 font-[600]">/</span>
          <span className=" font-[600] text-dark">Staff</span>
        </div>
      </section>
      {loading ? (
        <center>
          <CircularProgress />
        </center>
      ) : (
        <section className="w-full p-[20px] card">
          <DataTable
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            header={header}
            value={customers}
            selectionMode={"checkbox"}
            emptyMessage="No products found."
            tableStyle={{ minWidth: "50rem" }}
            globalFilterFields={["name"]}
            filters={filters}
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            <Column
              sortable
              field="product.name"
              header="Staff"
              body={customerTemplate}
            ></Column>
            <Column sortable field="email" header="Email"></Column>
            <Column sortable field="role.name" header="Role"></Column>
            <Column
              sortable
              field="address"
              header="Address"
              style={{ maxWidth: 200 }}
            ></Column>
            <Column sortable field="created_at" header="Join Date"></Column>
            <Column
              field="id"
              body={actionTemplate}
              style={{ width: 0, textAlign: "center" }}
            ></Column>
          </DataTable>
        </section>
      )}
    </>
  );
}

export default StaffPage;
