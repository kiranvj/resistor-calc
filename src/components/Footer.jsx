import React from "react";
import { Box } from "@material-ui/core";

export default function Footer() {
  return (
    <Box component="footer" textAlign="center" pt={5} pb={3} mt={15}>
      <small>
        <div>
          Handcrafted with{" "}
          <Box component="span" fontSize="1.25rem" className="text-red">
            ❤
          </Box>{" "}
          by <a href="https://kiranvj.com">Kiran Paul VJ</a> for{" "}
          <a href="https://alfran.in/" title="Alfran Technology Solutions">
            {" "}
            Alfran Technology Solutions
          </a>
        </div>
        <div>
          {window.location.host.indexOf("localhost") === -1 ? (
            <a
              href="https://www.webfreecounter.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://www.webfreecounter.com/hit.php?id=gmkxapf&nd=7&style=1"
                border="0"
                alt="visitor counter"
              />
            </a>
          ) : null}
        </div>
      </small>
    </Box>
  );
}
