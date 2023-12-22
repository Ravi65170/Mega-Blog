import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useMemo } from "react";

const footerData = [
  {
    key: 1,
    title: "Company",
    links: ["Features", "Pricing", "Affiliate Program", "Press Kit"],
  },
  {
    key: 2,
    title: "Support",
    links: ["Account", "Help", "Contact Us", "Customer Support"],
  },
  {
    key: 3,
    title: "Legals",
    links: ["Terms & Conditions", "Privacy Policy", "Licensing"],
  },
];

export default function Footer() {
  const renderFotterData = useMemo(() => {
    return footerData.map((item) => {
      return (
        <div className="" key={item.key}>
          <div className="">
            <h3 className="text-white font-bold text-lg">{item.title}</h3>
            {item.links.map((link, i) => (
              <ul key={i.toString()}>
                <li className=" ">
                  <Link
                    className="text-white hover:text-rose-400 pt-1 justify-between"
                    to="/"
                  >
                    {link}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      );
    });
  }, []);
  return (
    <section className="py-4 bg-slate-900 rounded-3xl border border-t-2 ">
      <div className="flex">
        <div className="pl-5 w-2/12">
          <Logo />
        </div>
        <div className="flex justify-between w-9/12  ">{renderFotterData}</div>
      </div>
      <div className="mt-5">
        <p className="text-lg  text-white font-bold">&copy; Copyright 2023.</p>
      </div>
    </section>
  );
}
