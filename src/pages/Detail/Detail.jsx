import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DropDownDesk from "../../Component/Dropdown/DropDownDesk";
import Footer from "../../Component/Footer/Footer";
import IndentityCar from "../../Component/IndentityCar/IndentityCar";
import Navbar from "../../Component/Navbar/Navbar";
import { db } from "../../firebase";

const Detail = () => {
  const [dropDown, setDropdown] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "cars", id);
      const docSnap = await getDoc(docRef);
      try {
        setData(docSnap.data());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar listcar={true} />
      <div className="container pt-10">
        <div className="py-14 space-y-2 md:flex md:justify-center md:space-x-3 md:space-y-0">
          {/* card car detail */}
          <div className="p-3 border-2 rounded-md space-y-5 basis-2/3">
            <img src={data.img} alt="img" className="rounded-md w-full" />
            {/* indtity car */}
            <div className="md:hidden">
              <IndentityCar data={data} />
            </div>
            {/* Deskripsi */}
            <div className="hidden md:block">
              <DropDownDesk
                data={data}
                dropDown={dropDown}
                setDropdown={setDropdown}
              />
            </div>
          </div>

          {/* Deskripsi */}
          <div className="md:hidden">
            <DropDownDesk
              data={data}
              dropDown={dropDown}
              setDropdown={setDropdown}
            />
          </div>

          <div className="md:space-y-5 md:border-2 md:p-3 md:rounded-md md:mt-0 md:h-fit basis-1/3">
            <div className="hidden md:block">
              <IndentityCar data={data} />
            </div>
            <a
              href={`https://wa.me/6285603216298/?text=Hello%2C%20saya ingin menyewa mobil ${data.name}`}
              target="_blank" 
            >
              <button className="p-3 mt-5 bg-biru-primer text-white w-full text-sm rounded-lg hover:opacity-90">
                Hubungi Pemilik
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
