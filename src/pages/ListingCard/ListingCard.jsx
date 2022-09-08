import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import CardProduct from "../../Component/Card/CardProduct";
import { BiArrowBack } from "react-icons/bi";
import "./ListingCard.css";
import { useNavigate } from "react-router-dom";
import CarouselList from "../../Component/Slider/CarouselList";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const ListingCard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
    <>
    <Navbar listcar={true} />
      <div className="container max-w-6xl pt-14">
        <CarouselList />
        <div className="wrapper-listing">
          <div className="wrap-title">
            <h1>Daftar mobil yang direntalkan</h1>
          </div>
          <div className="py-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
      <Footer />
    </>
  );
};

export default ListingCard;
