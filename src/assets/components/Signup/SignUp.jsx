import logo from "../../components/twitterLogo.png";
import "./SignUp.css";

export default function SignUp() {
  const currentYear = new Date().getFullYear();
  const days = Array.from({ length: 31 }, (i) => i + 1);
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
    (i) => currentYear - i
  );
  return (
    <div className="ana-div">
      <img src={logo} />
      <div>
        <form className="signup-form">
          <h1>Hesabını Oluştur</h1>
          <label>
            <input type="text" placeholder="İsim Soyisim" />
          </label>
          <label>
            <input type="text" placeholder="Kullanıcı Adı" />
          </label>
          {/* <label>
            <input type="date" />
          </label> */}
          <h5>Doğum Tarihi</h5>
          <h6>
            Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme, evcil
            hayvan veya başka bir şey için olsa bile kendi yaşını doğrulaman
            gerekir.
          </h6>
          <div className="date-picker">
            <select id="day" name="day">
              <option value="">Gün</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <select id="month" name="month">
              <option value="">Ay</option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>

            <select id="year" name="year">
              <option value="">Yıl</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <button>Kayıt Ol</button>
        </form>
      </div>
    </div>
  );
}
