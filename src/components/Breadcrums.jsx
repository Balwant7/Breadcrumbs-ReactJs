import { space } from "postcss/lib/list";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrums = () => {
  const { pathname } = useLocation();
  let path = pathname.split("/").filter((x) => x);
  let breadcrumsPath = "";

  return (
    <div className="m-5 my-7 border-dashed border-2 border-sky-500 p-4 w-60">
      <Link to="/" className="text-xl text-blue-700 ">
        Home
      </Link>

      {path.map((name, index) => {
        breadcrumsPath += `/${name}`;
        const isLast = index === path.length - 1;

        return isLast ? (
          <span key={breadcrumsPath} className="text-xl text-blue-700">
            /{name}
          </span>
        ) : (
          <span className="text-xl text-blue-700">
            <Link key={breadcrumsPath} to={breadcrumsPath}>
              /{name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrums;
