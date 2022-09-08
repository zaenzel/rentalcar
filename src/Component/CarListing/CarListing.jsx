import React, { useState } from "react";
import CardProduct from "../Card/CardProduct";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const CarListing = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    // REALTIME
    const unsub = onSnapshot(
      collection(db, "cars"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="container">
      <div className="mt-10 space-y-12">
        <h1 className="font-bold text-md sm:text-3xl text-center">
          Daftar mobilmu yang direntalkan
        </h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="min-h-[100px] border-dashed border-2 cursor-pointer flex flex-col justify-center items-center text-neutral-3 space-y-3"
            onClick={(e) => navigate("addcar")}
          >
            <BsPlusLg />
            <p className="text-sm">Tambah Produk</p>
          </div>
          {Object.keys(data).length === 0
            ? null
            : data.map((car, index) => {
                return (
                  <>
                    <CardProduct dashboard={true} data={car} key={index} />
                  </>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default CarListing;
