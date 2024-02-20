"use client";
import { useState } from "react";
import { Button } from "../ui/button";

const AttendanceButton = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const handleCheckInOut = () => {
    setIsCheckedIn((prev) => !prev);
  };

  return (
    <>
      {isCheckedIn ? (
        <Button
          variant={"default"}
          className="bg-orange-500 hover:bg-orange-500/80"
          onClick={handleCheckInOut}
        >
          Break
        </Button>
      ) : null}
      <Button
        className={`${
          isCheckedIn
            ? "bg-green-500 hover:bg-green-500/80"
            : "bg-red-500 hover:bg-red-500/80"
        }`}
        onClick={handleCheckInOut}
      >
        {isCheckedIn ? "Check Out" : "Check In"}
      </Button>
    </>
  );
};

export default AttendanceButton;
