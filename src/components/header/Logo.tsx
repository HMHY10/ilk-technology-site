import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className="flex items-center">
    <img
      src="/lovable-uploads/dfa13fcd-f23a-4e21-a7ff-3de03dce77ae.png"
      alt="ILK Technologies"
      className="h-16 w-auto"
    />
  </Link>
);