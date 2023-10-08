import axios from "axios";

const API_KEY = import.meta.env.VITE_IP_GEOLOCATION_API_KEY;

function Header({ input, setInput, setData }) {
  //these 3 function together do the IP validation
  function inRange(n) {
    // check if every split is in range 0-255
    if (n >= 0 && n <= 255) {
      return true;
    }
    return false;
  }

  function hasLeadingZero(n) {
    // check if every split has leading zero or not.
    if (n.length > 1) {
      if (n.charAt(0) === "0") {
        return true;
      }
    }
    return false;
  }

  function validateIP(s) {
    let parts = s.split(".");
    if (parts.length !== 4) {
      // if number of splitting element is not 4 it is not a valid IP address
      return false;
    }
    for (let i = 0; i < parts.length; i++) {
      let part = parts[i];
      if (hasLeadingZero(part)) {
        return false;
      }
      if (part.length === 0) {
        return false;
      }
      try {
        let num = parseInt(part, 10);
        if (!inRange(num)) {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return true;
  }

  function handleApiCall(inputIP) {
    validateIP(inputIP);

    if (input === "" || !validateIP(inputIP)) {
      setInput("");
      return;
    }

    //test query(=IP) => 8.8.8.8
    async function apiCall() {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${input}`
      );

      setData(res.data);
    }
    apiCall();

    setInput("");
  }

  return (
    <section className="relative ">
      <picture>
        <source
          media="(max-width: 2000px)"
          srcSet="images\pattern-bg-desktop.png"
        />
        <source
          media="(max-width: 500px)"
          srcSet="images\pattern-bg-mobile.png"
        />
        <img
          className="w-full h-80"
          srcSet="images\pattern-bg-desktop.png"
          alt="IfItDoesntMatchAnyMedia"
        />
      </picture>

      <div className="absolute flex flex-col items-center w-full top-6 gap-y-6 500:gap-y-4 800:gap-y-8">
        <h1 className="text-2xl font-medium text-white 500:text-4xl">
          IP Address Tracker
        </h1>
        <div className="flex flex-col justify-center ">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="pl-5 placeholder:text-[hsl(0, 0%, 59%)] placeholder:text-sm w-[330px] 500:w-[450px] rounded-[12px] h-14 800:h-16 500:placeholder:text-lg 800:w-[600px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="text-white bg-black 800:h-16 w-12 h-14 mt-[-56px] 800:mt-[-64px] self-end rounded-r-[12px] hover:opacity-70"
            onClick={() => handleApiCall(input)}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
