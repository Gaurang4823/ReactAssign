import React from "react";
import ContactInfo from "./ContactCard";

function keanuInfo() {
  return (
    <div>
      <ContactInfo
        contact={{
          name: "Keanu Reeves - Young",
          img: "https://placekeanu.com/300/550/yg",
          Phone: "0141-856932147",
          Email: "xyzzz@gmail.com"
        }}
      />
      <ContactInfo
        contact={{
          name: "Keanu Reeves - Grey Bule",
          img: "https://placekeanu.com/250/g",
          Phone: "0141-856932147",
          Email: "xyzzz@gmail.com"
        }}
      />
      <ContactInfo
        contact={{
          name: "Keanu Reeves - Youth",
          img: "https://placekeanu.com/500/300/y",
          Phone: "0141-856932147",
          Email: "xyzzz@gmail.com"
        }}
      />
      <ContactInfo
        contact={{
          name: "Keanu Reeves",
          img: "https://placekeanu.com/200/150",
          Phone: "0141-856932147",
          Email: "xyzzz@gmail.com"
        }}
      />
    </div>
  );
}

export default keanuInfo;
