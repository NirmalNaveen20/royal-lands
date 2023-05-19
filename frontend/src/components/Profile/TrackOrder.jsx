import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">Your Reservation is processing by agent.</h1>
        ) : data?.status === "Booking Received" ? (
          <h1 className="text-[20px]">
            Your booking is being processed. working on confirming the availability of the property and will provide further updates soon.
          </h1>
        ) : data?.status === "Booking Pending Approval" ? (
          <h1 className="text-[20px]">
            Booking is awaiting confirmation from the property agent or company. Your booking request is in progress and will be reviewed soon.
          </h1>
        ) : data?.status === "Booking Declined" ? (
          <h1 className="text-[20px]">
            Your booking request is declined or not approved.
          </h1>
        ) : data?.status === "Booking Ready for Check-in" ? (
          <h1 className="text-[20px]">
            Your booking is ready for check-in. Provide details on check-in procedures, due payments ,key collection, or any other necessary information.
          </h1>
        ) : data?.status === "Booking Completed" ? (
          <h1 className="text-[20px]">Your booking is completed!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Your refund is processing!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Your Refund is success!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
