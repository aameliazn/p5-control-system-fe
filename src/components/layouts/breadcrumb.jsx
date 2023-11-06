import React from "react";
import Link from "next/link";

export default function breadcrumb({ breadcrumbs }) {
  return (
    <>
      <div className="breadcrumbs text-sm">
        <ul>
          {breadcrumbs?.map((breadcrumb, index) => (
            <li key={index}>
              {breadcrumb?.url ? (
                <Link href={breadcrumb?.url}>{breadcrumb?.label}</Link>
              ) : (
                <span>{breadcrumb?.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
