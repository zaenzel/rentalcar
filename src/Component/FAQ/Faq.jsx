import React, { useState } from "react";
import "./Faq.css";
import { IoIosArrowDropdown } from "react-icons/io";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const qna = [
    {
      question: "Apa saja syarat yang dibutuhkan?",
      answer: "cukup dengan kartu identitas penyewa",
    },
    {
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer: "untuk sewa mobil, penyewa minimal sewa 1 hari",
    },
    {
      question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      answer:
        "jika memang mobil tersedia bisa saat itu juga membooking, tapi kami menyarankan untuk booking dari jauh-jauh hari agar mengamankan mobil",
    },
    {
      question: "Apakah Ada biaya antar-jemput?",
      answer: "tidak, untuk pengambilan mobil hanya ada rental",
    },
    {
      question: "Bagaimana jika terjadi kecelakaan?",
      answer:
        "sesuai kesepakatan jika terjadi kerusakan yang disebabkan oleh kelalaian penyewa maka akan di kenakan denda sesuai kerusakan mobil",
    },
  ];

  return (
    <div className="container" id="faq">
      <div className="wrapper">
        <div className="title">
          <h1>Pertanyaan umum</h1>
          <div className="image">
            <img src="/images/question.png" alt="" className="object-contain" />
          </div>
        </div>
        <div className="accordion">
          {qna.map((data, index) => {
            return (
              <div className="item" onClick={(e) => toggle(index)}>
                <p
                  className={selected === index ? "question show" : "question"}
                >
                  {data.question}{" "}
                  <div
                    className={selected === index ? "icon show" : "icon hides"}
                  >
                    <IoIosArrowDropdown />
                  </div>
                </p>
                <p
                  className={selected === index ? "answer show" : "answer hide"}
                >
                  {data.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
