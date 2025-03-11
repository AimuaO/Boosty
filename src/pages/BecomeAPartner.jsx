import React from "react";

const BecomeAPartner = () => {
  return (
    <div className="min-h-screen bg-yellow-500 px-16 lg:px-36 lg:pt-32 grid grid-cols-2 place-content-center place-items-center">
      <div className="w-full">
        <h1 className="font-bold text-[40px] leading-tight">
          Who Can Become a Partner?
        </h1>
        <p className="font-normal mt-3">
          Boosty partners with businesses and individuals dedicated to advancing
          solar energy in Nigeria. You can join us if you are:
        </p>
        <div className="">
          <div style={{display:"flex", gap:"1rem", marginTop: "2rem"}}>
            <div>
              <img src="solarman.svg" alt="" />
            </div>
            <div>
              <h4 style={{fontWeight: "700"}}>Solar Manufacturers</h4>
              <p>
                Provide high-quality solar panels, <br /> inverters, or batteries to
                power homes <br /> and businesses.
              </p>
            </div>
          </div>
          <div style={{display:"flex", gap:"1rem", marginTop: "2rem"}}>
            <div>
              <img src="solarretailers.svg" alt="" />
            </div>
            <div>
              <h4 style={{fontWeight: "700"}}>Solar Retailers</h4>
              <p>
                Sell solar products online or in stores <br /> and want to integrate
                with Boosty.
              </p>
            </div>
          </div>

          <div style={{display:"flex", gap:"1rem", marginTop: "2rem"}}>
            <div>
              <img src="solarinstallers.svg" alt="" />
            </div>
            <div>
              <h4 style={{fontWeight: "700"}}>Solar Installers</h4>
              <p>
                Offer professional installation services <br /> with a commitment to
                quality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <form
          style={{ width: "510px", padding: "40px 25px", borderRadius: "24px" }}
          className="bg-white"
          action="submit"
        >
          <h1 style={{ fontSize: "25px", fontWeight: "700" }}>
            Submit Your Details and We Will <br /> Reach You
          </h1>
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <label>Business Email</label>
          </div>
          <input
            style={{
              marginTop: "",
              marginBottom: "20px",
              padding: "10px",
              border: "1.5px solid #A6A0A3",
              borderRadius: "8px",
              width: "100%",
            }}
            type="text"
            placeholder="you@yourbusiness.com"
            required
          />
          <div style={{ display: "flex", gap: "2rem" }} className="two-froms">
            <div className="first">
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <label htmlFor="">First Name</label>
              </div>
              <input
                style={{
                  padding: "10px",
                  border: "1.5px solid #A6A0A3",
                  width: "100%",
                  borderRadius: "8px",
                }}
                type="text"
                placeholder="Brite"
              />
            </div>

            <div className="second">
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <label htmlFor="">Last Name</label>
              </div>

              <input
                style={{
                  padding: "10px",
                  border: "1.5px solid #A6A0A3",
                  width: "100%",
                  borderRadius: "8px",
                }}
                type="text"
                placeholder="Solari"
              />
            </div>
          </div>
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <label>Company Name</label>
          </div>
          <input
            style={{
              padding: "10px",
              border: "1.5px solid #A6A0A3",
              borderRadius: "8px",
              width: "100%",
            }}
            type="text"
            placeholder="Boosty"
            required
          />
          <div style={{ display: "flex", gap: "2rem" }} className="two-froms">
            <div className="first">
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <label htmlFor="">Job Title</label>
              </div>
              <input
                style={{
                  padding: "10px",
                  border: "1.5px solid #A6A0A3",
                  width: "100%",
                  borderRadius: "8px",
                }}
                type="text"
                placeholder="Manager"
              />
            </div>

            <div className="second">
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <label htmlFor="">Phone Number</label>
              </div>
              <input
                style={{
                  padding: "10px",
                  border: "1.5px solid #A6A0A3",
                  width: "100%",
                  borderRadius: "8px",
                }}
                type="text"
                placeholder="+234 8833 4488"
              />
            </div>
          </div>
          <p style={{ marginTop: "30px" }}>Which one are you</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
            className="checks"
          >
            <div>
              <input type="checkbox" />
              <label style={{marginLeft:"7px"}} htmlFor="">Manufacturer</label>
            </div>
            <div>
              <input type="checkbox" />
              <label style={{marginLeft:"7px"}} htmlFor="">Installer</label>
            </div>
            <div>
              <input type="checkbox" />
              <label style={{marginLeft:"7px"}} htmlFor="">Retailer/Distributor</label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
            className="last"
          >
            <div></div>
            <div>
              <button
                style={{
                  backgroundColor: "#202D2D",
                  color: "#F3B921",
                  padding: "8px 17px",
                  borderRadius: "20px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeAPartner;
