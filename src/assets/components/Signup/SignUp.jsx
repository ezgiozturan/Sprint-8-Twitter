// import { useState } from "react";
// import logo from "../../components/twitterLogo.png";
// import "./SignUp.css";
// import axios from "axios";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// const initialForm = {
//   isim: "",
//   kullanici: "",
// };

// export default function SignUp({ setKullanici }) {
//   const [formData, setFormData] = useState(initialForm);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const history = useHistory();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const uyeGirisi = {
//       ...formData,
//       isim,
//       kullanici,
//     };
//     axios
//       .post("https://reqres.in/api/twitter", uyeGirisi)
//       .then((response) => {
//         console.log(response);
//         setKullanici(uyeGirisi);
//         history.push("/home");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const currentYear = new Date().getFullYear();
//   const days = Array.from({ length: 31 }, (_, i) => i + 1);
//   const months = [
//     { value: 1, label: "Ocak" },
//     { value: 2, label: "Şubat" },
//     { value: 3, label: "Mart" },
//     { value: 4, label: "Nisan" },
//     { value: 5, label: "Mayıs" },
//     { value: 6, label: "Haziran" },
//     { value: 7, label: "Temmuz" },
//     { value: 8, label: "Ağustos" },
//     { value: 9, label: "Eylül" },
//     { value: 10, label: "Ekim" },
//     { value: 11, label: "Kasım" },
//     { value: 12, label: "Aralık" },
//   ];
//   const years = Array.from(
//     { length: currentYear - 1900 + 1 },
//     (_, i) => currentYear - i
//   );
//   return (
//     <div className="ana-div">
//       <img src={logo} />
//       <div>
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <h1>Hesabını Oluştur</h1>
//           <div className="isim-kullanici">
//             <label>
//               <input
//                 type="text"
//                 placeholder="İsim Soyisim"
//                 value={formData.isim}
//                 name="isim"
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               <input
//                 type="text"
//                 placeholder="Kullanıcı Adı"
//                 value={formData.kullanici}
//                 name="kullanici"
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           {/* <label>
//             <input type="date" />
//           </label> */}
//           <div className="dogum-tarihi">
//             <h5 id="h5-dogum">Doğum Tarihi</h5>
//             <h6 style={{ color: "grey" }}>
//               Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme,
//               evcil hayvan veya başka bir şey için olsa bile kendi yaşını
//               doğrulaman gerekir.
//             </h6>
//           </div>
//           <div className="date-picker">
//             <select id="day" name="day">
//               <option value="">Gün</option>
//               {days.map((day) => (
//                 <option key={day} value={day}>
//                   {day}
//                 </option>
//               ))}
//             </select>

//             <select id="month" name="month">
//               <option value="">Ay</option>
//               {months.map((month) => (
//                 <option key={month.value} value={month.value}>
//                   {month.label}
//                 </option>
//               ))}
//             </select>

//             <select id="year" name="year">
//               <option value="">Yıl</option>
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button id="button-kayit" type="submit">
//             Kayıt Ol
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import logo from "../../components/twitterLogo.png";
import "./SignUp.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initialForm = {
  isim: "",
  kullanici: "",
  day: "",
  month: "",
  year: "",
};

export default function SignUp({ setKullanici }) {
  const [formData, setFormData] = useState(initialForm);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/twitter", formData)
      .then((response) => {
        console.log(response);
        setKullanici(formData);
        history.push("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const currentYear = new Date().getFullYear();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: 1, label: "Ocak" },
    { value: 2, label: "Şubat" },
    { value: 3, label: "Mart" },
    { value: 4, label: "Nisan" },
    { value: 5, label: "Mayıs" },
    { value: 6, label: "Haziran" },
    { value: 7, label: "Temmuz" },
    { value: 8, label: "Ağustos" },
    { value: 9, label: "Eylül" },
    { value: 10, label: "Ekim" },
    { value: 11, label: "Kasım" },
    { value: 12, label: "Aralık" },
  ];
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i
  );

  return (
    <div className="ana-div">
      <img src={logo} alt="Logo" />
      <div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Hesabını Oluştur</h1>
          <div className="isim-kullanici">
            <label>
              <input
                type="text"
                placeholder="İsim Soyisim"
                value={formData.isim}
                name="isim"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                value={formData.kullanici}
                name="kullanici"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="dogum-tarihi">
            <h5 id="h5-dogum">Doğum Tarihi</h5>
            <h6 style={{ color: "grey" }}>
              Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme,
              evcil hayvan veya başka bir şey için olsa bile kendi yaşını
              doğrulaman gerekir.
            </h6>
          </div>
          <div className="date-picker">
            <select
              id="day"
              name="day"
              value={formData.day}
              onChange={handleChange}
            >
              <option value="">Gün</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <select
              id="month"
              name="month"
              value={formData.month}
              onChange={handleChange}
            >
              <option value="">Ay</option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>

            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
            >
              <option value="">Yıl</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <button id="button-kayit" type="submit">
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
}
