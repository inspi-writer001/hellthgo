import { json } from "./json";
import { Paper } from "@mui/material";

const Services = () => {
  return (
    <div>
      <div>
        <div className="h2 text-center pb-3">Our Services</div>

        {json.map((person, i) => (
          <div
            style={{
              display: "flex",
              "flex-direction": "row",
              "backdrop-filter": "blur(5px) saturate(200%)",
              "-webkit-backdrop-filter": "blur(5px) saturate(200%)",
              // "background-color": "rgba(255, 255, 255, 0.45)",
              "border-radius": "12px",
              border: "1px solid rgba(209, 213, 219, 0.3)",
            }}
          >
            <div style={{ width: "20%" }}>
              <img src={person.img} alt={`med${i}`}></img>
            </div>
            <div style={{ display: "flex", "flex-direction": "column" }}>
              <div>
                <p>{person.paragraph}</p>
              </div>
              <div
                style={{ "align-items": "bottom", "justify-content": "center" }}
              >
                {person.placeholder}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
