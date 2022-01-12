import React,{useEffect} from 'react'
import Sidebar from "./Sidebar"
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    //To count out of stock products
    let outOfStock = 0;

    products &&
      products.forEach((item) => {
        if (item.Stock === 0) {
          outOfStock += 1;
        }
      });
      useEffect(() => {
        dispatch(getAdminProduct());
        // dispatch(getAllOrders());
        // dispatch(getAllUsers());
      }, [dispatch]);

    //For chart
    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
          {
            label: "TOTAL AMOUNT",
            backgroundColor: ["tomato"],
            hoverBackgroundColor: ["rgb(197, 72, 49)"],
            data: [0, 4000],
          },
        ],
      };
    
      const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
          {
            backgroundColor: ["#00A6B4", "#6800B4"],
            hoverBackgroundColor: ["#4B5000", "#35014F"],
            data:[outOfStock, products.length - outOfStock],
          },
        ],
      };

    return (
        <div className="dashboard">
            <MetaData title="Dashboard - Admin Panel" />
            <Sidebar />
            <div className="dashboardContainer">
                <Typography component="h1">Dashboard</Typography>
                <div className="dashboardSummary">
                    <div>
                        <p>
                            Total Amount <br /> ₹2000
                        </p>
                    </div>
                </div>

                <div className="dashboardSummaryBox2">
                    <Link to="/admin/products">
                        <p>Product</p>
                        <p>                          
                            {products && products.length}
                        </p>
                    </Link>
                    <Link to="/admin/orders">
                        <p>Orders</p>
                        <p>
                            40
                            {/* {orders && orders.length} */}
                        </p>
                    </Link>
                    <Link to="/admin/users">
                        <p>Users</p>
                        <p>
                            50
                            {/* {users && users.length} */}
                        </p>
                    </Link>
                </div>

                <div className="lineChart">
                    <Line data={lineState} />
                </div>

                <div className="doughnutChart">
                    <Doughnut data={doughnutState} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
